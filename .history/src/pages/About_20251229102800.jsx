export default function About() {
  return (
    <main className="pt-28 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <section className="flex flex-col items-center text-center">

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            About Billions Tech
          </h1>

          <p className="mt-6 max-w-2xl text-base md:text-lg text-gray-600 leading-relaxed">
           Most people think technology is about code and hardware. At Billions Tech, we believe it’s actually about time and ease. We started with a simple observation: businesses were spending more time fighting with their tools than using them to grow. We decided to change that. We don't just build software; we build "breathing room" for your team so you can focus on the big ideas while we handle the digital heavy lifting.
           The name "Billions" isn't just about numbers—it’s about impact. Our goal is to create work that improves the daily lives of the people who use it. Whether we are helping a small startup find its footing or helping a large enterprise streamline its workflow, we treat every project like it’s our own.
          </p> 

        </section>

        {/* Content Section */}
        <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl shadow-sm border">
            <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              We believe you shouldn’t need a PhD in Computer Science just to run a successful business. Our mission is to bridge the gap between "high-tech" and "highly-useful." We show up every day to build digital systems that are so intuitive, you forget how hard they were to create.
            </p>
          </div>

          <div className="p-6 rounded-2xl shadow-sm border">
            <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              We aren't just looking at the next quarter; we’re looking at the next decade. We envision a future where technology isn't a barrier or a headache, but a silent partner in human progress. We want the "Billions" in our name to represent the number of lives made slightly easier because of something we built.
            </p>
          </div>

          <div className="p-6 rounded-2xl shadow-sm border">
            <h3 className="text-xl font-semibold mb-3">What We Do</h3>
            <p className="text-gray-600 leading-relaxed">
              We design, develop, and optimize digital products—ranging from
              websites and applications to data-driven business solutions.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
