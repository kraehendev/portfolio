import Heading from '@/components/atoms/heading';
import Box from '@/components/atoms/box';
import IconLinkButton from '@/components/organisms/iconLinkButton';
import Paragraph from '@/components/atoms/paragraph';
export default function NotFound() {
  return (
    <div>
      <Box>
        <Heading as="h2">
          This is not the page you are looking for. {'(⓿_⓿)'}
        </Heading>
        <Paragraph>
          Im sorry, i couldnt find anything under this URL. Please go back to
          the home page.
        </Paragraph>
        <div className="mt-2">
          <IconLinkButton href="/" label="Return Home" />
        </div>
      </Box>
    </div>
  );
}
