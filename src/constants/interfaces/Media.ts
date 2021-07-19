export default interface MediaInterface {
  id: string | number;
  url: string;
  title: string;
  author: string;
  date: number | string;
  // Initialement, duration, width et height étaient dans leur propre interface VideoInterface et ImageInterface, mais j'avais quelques conflits dans LandingPageView,
  // donc j'ai préféré fusionner toutes les interfaces, ce qui fait d'autant plus de sens étant donné que la seule propriété qui diffère est duration
  width: number;
  height: number;
  duration?: number;
  tags: string[];
}