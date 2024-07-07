import fetch from "@/assets/fetch.png";
import setup from "@/assets/setup.png";
import Image from "next/image";

export default function InstructionsPage() {
  return (
    <main>
      <h1>Instructions</h1>
      <p>You can get started like we did last Friday:</p>
      <Image src={setup} alt="setup instructions" />
      <p>
        Don&apos;t worry about making things pretty! Just focus on learning the
        skills, we&apos;ll get to something bigger very soon :)
      </p>
      <ol className="list-decimal ml-10">
        <ListItem1 />
        <ListItem2 />
        <ListItem3 />
      </ol>
      <br />
      <p>
        Remember to use the documentation - e.g.{" "}
        <a href="https://tailwindcss.com/docs/flex">here</a> are the Tailwind
        docs.
      </p>
    </main>
  );
}

function ListItem1() {
  return (
    <li>
      Make the header first.
      <br />
      This is where you&apos;ll get experience using TailwindCSS.
      <br />I recommend putting this component in the layout.tsx file. Use a
      flexbox, {String.raw`<Image />`} imported from next/image, and{" "}
      {String.raw`<Link />`} imported from next/link.
    </li>
  );
}

function ListItem2() {
  return (
    <li>
      Make the blogs page & individual blog pages next.
      <br />
      This is where you&apos;ll get experience using Next routing.
      <br />
      You can get the data from:
      <ul className="list-disc ml-10">
        <li>
          <a
            target="_blank"
            href="https://wdcc-academy-mini-project.vercel.app/api/blogs"
          >
            https://wdcc-academy-mini-project.vercel.app/api/blogs
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://wdcc-academy-mini-project.vercel.app/api/blogs/ai-disclaimer"
          >
            https://wdcc-academy-mini-project.vercel.app/api/blogs/[slug]
          </a>
        </li>
      </ul>
      E.g.
      <Image src={fetch} alt="fetch example" />
    </li>
  );
}

function ListItem3() {
  return (
    <li>
      Finally, make the home page. This ain&apos;t so critical so feel free to
      skip it, but it&apos;s a good practice of grid layout.
    </li>
  );
}
