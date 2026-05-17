import {
  classNameSummary,
  getHashIdFromHref,
  getPathFromHashHref,
  handleSamePageHashClick,
  isExternalLink,
  isSamePageHashHref,
  scrollToHashId,
} from '@/utils';

describe('classNameSummary', () => {
  it('joins truthy class names and drops empty values', () => {
    expect(classNameSummary(['a', undefined, 'b', ''])).toBe('a b');
  });
});

describe('isExternalLink', () => {
  it.each([
    ['https://example.com', true],
    ['http://example.com', true],
    ['mailto:a@b.c', true],
    ['tel:+123', true],
    ['/about', false],
    ['#section', false],
    [undefined, false],
  ])('returns %s for %j', (href, expected) => {
    expect(isExternalLink(href)).toBe(expected);
  });
});

describe('hash href helpers', () => {
  it('extracts hash id from href', () => {
    expect(getHashIdFromHref('/en#about')).toBe('about');
    expect(getHashIdFromHref('#top')).toBe('top');
    expect(getHashIdFromHref('/en')).toBeNull();
    expect(getHashIdFromHref('/en#')).toBeNull();
  });

  it('extracts path from hash href', () => {
    expect(getPathFromHashHref('/en#about')).toBe('/en');
    expect(getPathFromHashHref('#about')).toBe('/');
    expect(getPathFromHashHref('/en')).toBe('/en');
  });

  it('detects same-page hash links', () => {
    expect(isSamePageHashHref('/en#about', '/en')).toBe(true);
    expect(isSamePageHashHref('/de#about', '/en')).toBe(false);
    expect(isSamePageHashHref('/en', '/en')).toBe(false);
  });
});

describe('scrollToHashId', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('scrolls the target element into view with smooth behavior by default', () => {
    const scrollIntoView = jest.fn();
    const element = { scrollIntoView } as unknown as HTMLElement;
    jest.spyOn(document, 'getElementById').mockReturnValue(element);

    scrollToHashId('about');

    expect(document.getElementById).toHaveBeenCalledWith('about');
    expect(scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
  });
});

describe('handleSamePageHashClick', () => {
  beforeEach(() => {
    jest.spyOn(window.history, 'pushState').mockImplementation(() => {});
    jest.spyOn(window, 'dispatchEvent').mockImplementation(() => true);
    jest.spyOn(document, 'getElementById').mockReturnValue({
      scrollIntoView: jest.fn(),
    } as unknown as HTMLElement);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('prevents default and scrolls for same-page hash links', () => {
    const preventDefault = jest.fn();
    handleSamePageHashClick({ preventDefault }, '/en#about', '/en');

    expect(preventDefault).toHaveBeenCalled();
    expect(document.getElementById).toHaveBeenCalledWith('about');
    expect(window.history.pushState).toHaveBeenCalledWith(
      null,
      '',
      '/en#about',
    );
  });

  it('does nothing for cross-page or non-hash links', () => {
    const preventDefault = jest.fn();
    handleSamePageHashClick({ preventDefault }, '/de#about', '/en');
    handleSamePageHashClick({ preventDefault }, '/en', '/en');

    expect(preventDefault).not.toHaveBeenCalled();
  });
});
