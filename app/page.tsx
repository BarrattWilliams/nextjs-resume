export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-10 text-gray-900">

      <header className="mb-6 border-b border-gray-200 pb-6">
        <h1 className="text-3xl font-bold">Barratt Williams</h1>
        <p className="text-gray-600 mt-1">
          B.A. Business Analytics and Information Systems Student
        </p>
      </header>

      <section className="border-t pt-6 mt-6">
        <h2 className="text-xl font-semibold mb-3">Contact</h2>
        <p>Email: barrattwilliams@usf.edu</p>
        <p>GitHub: github.com/barrattwilliams</p>
        <p>Mobile: 813-459-4904</p>
      </section>

      <section className="border-t pt-6 mt-6">
        <h2 className="text-xl font-semibold mb-3">Education</h2>

        <p className="font-semibold">University of South Florida</p>
        <p className="text-gray-600">
          B.A. Business Analytics and Information Systems
        </p>

        <p className="mt-3 font-semibold">Hillsborough Community College</p>
        <p className="text-gray-600">
          Associate in Arts (2023–2024)
        </p>
      </section>

      <section className="border-t pt-6 mt-6">
        <h2 className="text-xl font-semibold mb-3">Experience</h2>

        <p className="font-semibold">Publix — Staff & Coordinator</p>
        <p className="text-gray-600 text-sm">2021 – Present</p>

        <ul className="list-disc ml-5 mt-2 text-gray-700">
          <li>Assisted customers and ensured quality service</li>
          <li>Supported store operations and teamwork efficiency</li>
          <li>Trained new employees</li>
        </ul>
      </section>

      <section className="border-t pt-6 mt-6">
        <h2 className="text-xl font-semibold mb-3">Skills</h2>

        <ul className="list-disc ml-5 text-gray-700">
          <li>Data Analysis</li>
          <li>Python (Basic)</li>
          <li>JavaScript</li>
          <li>Tableau</li>
          <li>Excel</li>
        </ul>
      </section>

      <section className="border-t pt-6 mt-6">
        <h2 className="text-xl font-semibold mb-3">Projects</h2>

        <p className="font-semibold">Superstore Sales Analysis</p>
        <ul className="list-disc ml-5 mt-2 text-gray-700">
          <li>Analyzed sales and profit trends using Python</li>
          <li>Created visual dashboards for insights</li>
          <li>Identified business performance drivers</li>
        </ul>
      </section>

      <footer className="border-t pt-6 mt-10 text-sm text-gray-500">
        Built with Next.js and Tailwind CSS
      </footer>

    </main>
  );
}