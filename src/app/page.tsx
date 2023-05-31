import { DocumentMagnifyingGlassIcon } from '@heroicons/react/24/solid';
function HomePage() {
  return (
    <div className="flex flex-col items-center justify-content">
      <DocumentMagnifyingGlassIcon className="h-64 w-64 text-indigo-600/20" />
      <h1 className="text-3xl text-center mt-2 text-black font-bold mb-5">
        Welcome to the Amazon Scraper
      </h1>
      <h2 className="text-lg italic text-center text-black/50">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum amet
        maiores nobis ipsa aliquam distinctio delectus{' '}
      </h2>
    </div>
  );
}

export default HomePage;
