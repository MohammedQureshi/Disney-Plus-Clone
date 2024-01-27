import CarouselBannerWrapper from '@/components/carousel-banner-wrapper';
import MovieCarosel from '@/components/movie-carosel';
import {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from '@/lib/get-movies';

export default async function Home() {
  const upcomingMovies = await getUpcomingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();

  return (
    <main className="">
      <CarouselBannerWrapper />
      <div className="flex flex-col space-y-2 xl:-mt-48">
        <MovieCarosel movies={upcomingMovies} title="Upcoming" />
        <MovieCarosel movies={topRatedMovies} title="Top Rated" />
        <MovieCarosel movies={popularMovies} title="Popular Movies" />
      </div>
    </main>
  );
}
