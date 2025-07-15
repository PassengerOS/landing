export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-primary to-indigo-800 text-white text-center px-4">
      <h1 className="text-5xl font-bold mb-4">PassengerOS</h1>
      <p className="max-w-lg mb-8">
        The driver-first in-car operating system. All your controls, media, and navigation in one slick interface.
      </p>
      <div className="space-x-4">
        <a href="#cta" className="px-6 py-3 bg-accent rounded-lg font-semibold hover:bg-yellow-500 transition">Get Early Access</a>
        <a href="#features" className="px-6 py-3 border-2 border-white rounded-lg hover:bg-white hover:text-primary transition">See Features</a>
      </div>
    </section>
  );
}
