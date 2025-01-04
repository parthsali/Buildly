import React from "react";
import { FaLaptopCode } from "react-icons/fa";

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-md py-6">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-3xl font-bold text-gray-800">
            <FaLaptopCode className="inline-block mr-2" />
            Buildly
          </h1>
          <nav className="flex space-x-6">
            <a href="/pipeline" className="text-gray-600 hover:text-gray-900">
              Get Started
            </a>
            <a href="#book-demo" className="text-gray-600 hover:text-gray-900">
              Book a Demo
            </a>
          </nav>
        </div>
      </header>

      <main className="px-4 py-12 text-center">
        <h2 className="text-4xl font-bold text-gray-800">
          The No-Code AI Automations Platform
        </h2>
        <p className="mt-4 text-xl text-gray-700">
          An integrated framework of no-code, low-code, and out-of-the-box
          generative AI solutions to build AI search engines, assistants,
          chatbots, and automations.
        </p>
        <div className="mt-8 flex justify-center gap-8">
          <a
            href="/pipeline"
            className="bg-gray-800 text-white py-2 px-6 rounded-md shadow-md hover:bg-gray-700"
          >
            Get Started
          </a>
          <a
            href="#book-demo"
            className="border-2 border-gray-800 text-gray-800 py-2 px-6 rounded-md shadow-md hover:bg-gray-800 hover:text-white"
          >
            Book a Demo
          </a>
        </div>

        {/* Features Section */}
        <section className="mt-16 px-4">
          <h3 className="text-3xl font-semibold text-gray-800">Features</h3>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-gray-800">
                AI Search Engines
              </h4>
              <p className="text-gray-600 mt-4">
                Build powerful AI search engines with no coding, allowing your
                users to easily find the information they need.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-gray-800">AI Assistants</h4>
              <p className="text-gray-600 mt-4">
                Automate your customer support with AI assistants that can
                handle a wide range of inquiries without manual intervention.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-gray-800">Chatbots</h4>
              <p className="text-gray-600 mt-4">
                Create custom chatbots that interact with users naturally,
                providing tailored responses and solutions.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer id="book-demo" className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-semibold">
            Ready to revolutionize your workflow?
          </h3>
          <p className="mt-2 text-gray-300">
            Schedule a demo and see how Buildly can help you build AI-powered
            solutions without writing a single line of code.
          </p>
        </div>
      </footer>
    </div>
  );
};
