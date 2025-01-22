import { Coffee } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen py-12 flex items-center justify-content justify-center flex-col">
      <h1 className="text-4xl font-bold mb-8">Contact</h1>
      <div className="max-w-2xl">
        <p className="text-gray-400 mb-8">
          I&apos;m always open to discussing new projects, opportunities, or
          just connecting with fellow developers.
        </p>
        <div className="space-y-6 bg-gray-800 p-6 rounded">
          <div className="flex items-center space-x-4">
            <span className="text-gray-400">Email:</span>
            <a
              href="mailto:ericathompsonsmiles@gmail.com"
              className="hover:underline"
            >
              ericathompsonsmiles@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-400">GitHub:</span>
            <a href="https://github.com/Younique98" className="hover:underline">
              @Younique98
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-400">LinkedIn:</span>
            <a
              href="https://www.linkedin.com/in/ericathompsonsmiles/"
              className="hover:underline"
            >
              /in/ericathompsonsmiles
            </a>
          </div>

          {/* Buy Me a Coffee Section */}
          <div className="text-center py-6">
            <h2 className="text-2xl font-bold mb-4">Support My Work</h2>
            <p className="text-gray-400 mb-6">
              If you find my content helpful, consider buying me a coffee!
            </p>

            <a
              href="https://buymeacoffee.com/shesbrilliant"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-[#FFDD00] text-black font-bold rounded-lg hover:bg-[#FFDD00]/90 transition-colors"
            >
              <Coffee className="w-5 h-5 mr-2" />
              Buy me a coffee
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
