import { InformationCircleIcon } from "@heroicons/react/24/solid";

export function About() {
  return (
    <div className="space-y-4 text-base/7 text-gray-700 dark:text-gray-300">
      <div>
        <p className="mt-6">
          Albert Einstein was a German-born theoretical physicist, widely
          regarded as one of the greatest scientists of all time. Einstein is
          best known for developing the theory of relativity, but he also made
          important contributions to the development of the theory of quantum
          mechanics. Relativity and quantum mechanics are the two pillars of
          modern physics. His works are also known for their influence on the
          philosophy of science. Einstein&apos;s most well-known equation is the
          mass-energy equivalence formula <i>E = mc<sup>2</sup></i>, which has been 
          dubbed &quot;the world &apos;s most famous equation&quot;. Einstein received 
          the Nobel Prize in Physics in 1921 &quot;for his services to theoretical physics
          , and in particular for his discovery of the law of the photoelectric effect&quot;
          , which was an important step in the development of quantum theory.
        </p>
      </div>
      <div className="flow-root py-10">
        <figure>
          <img 
            alt="Solvay 1927 conference in Brussels, a gathering of the world's top physicists. Einstein is in the middle."
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Solvay_conference_1927.jpg/330px-Solvay_conference_1927.jpg"
            className="w-full rounded-xl object-cover"
            fetchPriority="high"
          />
          <figcaption className="mt-4 flex gap-x-2 text-sm/6 text-gray-500">
            <InformationCircleIcon aria-hidden="true" className="mt-0.5 h-5 w-5 flex-none text-gray-300 dark:text-gray-700" />
            Solvay 1927 conference in Brussels, a gathering of the world&apos;s top physicists. Einstein is in the middle.
          </figcaption>
        </figure>
      </div>
      <div>
        <p>
          Towards the beginning of his career, Einstein argued that
          Newton&apos;s mechanics were no longer able to unite the laws of
          classical mechanics with the laws of electromagnetic fields. This
          prompted him to develop a special theory of relativity while working
          at the Swiss Patent Office in Bern (1902–1909). However, he realized
          that the principle of relativity could also be extended to the field
          of gravity, and he published a paper on general relativity in 1916
          with his theory of gravity. Einstein continued to research problems of
          statistical mechanics and quantum theory, which led to his explanation
          of particle theory and molecular motion. Einstein also examined the
          thermal content of light which laid the foundation for the photon
          theory of light. In 1917, he applied the theory of general relativity
          to model the structure of the universe.
        </p>
      </div>
      <div>
        <p>
          After spending a year in Prague, Einstein lived in Switzerland between
          1895 and 1914, renounced his German citizenship in 1896, and graduated
          from the Swiss federal polytechnic school (later Eidgenössische
          Technische Hochschule, ETH) in Zürich in 1900. After living stateless
          for more than five years, Einstein obtained Swiss citizenship in 1901,
          which he held until the end of his life. In 1905, he was awarded a PhD
          by the University of Zurich. In the same year, Einstein published four
          groundbreaking papers during the annus mirabilis (miracle year), which
          led him to enter academia at the age of 26. Einstein taught
          theoretical physics in Zurich from 1912 to 1914, then moved to Berlin
          and became a member of the Prussian Academy of Sciences.
        </p>
      </div>
      <div>
        <p>
          In 1933, when Einstein visited the United States, Adolf Hitler came to
          power. Because of his Jewish background, Einstein chose not to return
          to Germany. He settled in the United States and became an American
          citizen in 1940. On the eve of World War II, Einstein sent a letter to
          President Franklin D. Roosevelt, warning him of the potential
          development of a &quot;very powerful new type of bomb&quot; and
          suggesting that the U.S. begin similar research immediately. This
          suggestion ultimately led to the Manhattan Project. Einstein supported
          the Allies, but opposed the idea of using nuclear fission as a weapon.
          Einstein signed the Russell–Einstein Manifesto with the British
          philosopher Bertrand Russell, who highlighted and denounced the
          dangers of nuclear weapons. He served at the Institute for Advanced
          Study in Princeton, New Jersey, until his death in 1955.
        </p>
      </div>
      <div>
        <p>
          Einstein published more than 300 scientific papers and more than 150
          non-scientific works. His intellectual achievements and originality
          made the word &quot;Einstein&quot; synonymous with &quot;genius&quot;.
          According to Eugene Wigner, &quot;Einstein&apos;s understanding was
          deeper than that of John von Neumann. His mind was sharper and more
          original than von Neumann&apos;s. And that&apos;s a very extraordinary
          thought.&quot;
        </p>
      </div>
    </div>
  );
}
