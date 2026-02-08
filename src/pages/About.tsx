function About() {
  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold">About Hindustan Oil Company</h2>
        <p className="mt-2 text-gray-600">
          Hindustan Oil Company supplies reliable petroleum-based products including premium grease, red oil,
          black oil, hydraulic fluids and gear oils. We focus on consistent quality, on-time delivery and
          long-term partnerships with industrial clients across India.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold">What we do</h3>
        <ul className="mt-3 list-inside list-disc text-gray-700">
          <li>Supply and distribution of petroleum-based lubricants</li>
          <li>Technical guidance for product selection and maintenance</li>
          <li>Bulk and retail order fulfillment with dependable logistics</li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold">Contact</h3>
        <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-gray-200 bg-white p-4">
            <p className="text-sm text-gray-700">Company: Hindustan Oil Company</p>
            <p className="text-sm text-gray-700">Phone: +91-98765-43210</p>
            <p className="text-sm text-gray-700">Email: contact@hindustanoil.co</p>
            <p className="text-sm text-gray-700">Address: Plot 12, Industrial Area, Ahmedabad, GJ</p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-4">
            <p className="text-sm text-gray-700">Follow us:</p>
            <div className="mt-2 flex items-center gap-4 text-gray-600">
              <a href="#" className="hover:text-indigo-600">Facebook</a>
              <a href="#" className="hover:text-indigo-600">Instagram</a>
              <a href="#" className="hover:text-indigo-600">Justdial</a>
              <a href="#" className="hover:text-indigo-600">Instamart</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About


