export default function Home() {
  return (
    <main className="h-full grid grid-cols-4 grid-rows-4 gap-5 p-5">
      <div className="home-div border-red-500 col-span-full">
        This is a header
      </div>
      <div className="home-div border-green-500 row-span-3 ">
        This is a sidebar
      </div>
      <div className="home-div border-blue-500 row-span-3 col-span-3">
        This is the content
      </div>
    </main>
  );
}
