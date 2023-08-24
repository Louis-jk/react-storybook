import { Metadata, ResolvingMetadata } from 'next';
import { useTranslations } from 'next-intl';

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function Index() {
  const t = useTranslations('Index');
  return <h1>{t('title')}</h1>;
}
