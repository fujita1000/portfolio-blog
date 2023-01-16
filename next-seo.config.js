// eslint-disable-next-line import/no-anonymous-default-export
export default{
  title: 'ポートフォリオ用ブログ',
  description: 'ポートフォリオ用ブログです',
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'http://localhost:3000',
    site_name: 'ポートフォリオ用ブログ',
    images: [
					 {
					 url: "http://localhost:3000/dev/logo.png",
					   width: 800,
					   height: 600,
					   alt: 'Og Image Alt',
					   type: 'image/png',
					 },
					],
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
};