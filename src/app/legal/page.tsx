import Container from "@/components/ui/container";
import Heading from "@/components/ui/heading";
import AnimatedLink from "@/components/sections/animatedLink";
import { getTranslations } from "next-intl/server";

export default async function LegalPage() {
  const t = await getTranslations();
  return (
    <main>
      <Container>
        <Heading>{t('legalNotice')}</Heading>
        <p>
        Angaben gemäß § 5 TMG:
        Florian Kühne
        Kontakt:
        E-Mail: email@florian-kuehne.de
        Urheberrecht
        Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
        Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.

        Quelle: <AnimatedLink href="https://www.erecht24.de" label="erecht24.de" />

        </p>
      </Container>
    </main>
  );
}
