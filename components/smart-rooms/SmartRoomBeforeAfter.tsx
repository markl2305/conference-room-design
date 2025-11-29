export default function SmartRoomBeforeAfter() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8">
          From “Please Bear With Our Tech” to “This Feels Solid”
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-red-100 bg-red-50 p-6">
            <div className="text-sm font-semibold text-red-700 mb-3">Before</div>
            <ul className="space-y-3 text-gray-700">
              {[
                "10 minutes of fumbling at the start of every hybrid call",
                "Echo and dropouts; people raising their voices at the laptop",
                "Camera shows the wrong angle or no one at all",
                "Nobody is really sure which buttons to push",
                "Partners avoid the conference room; clients quietly cringe",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-red-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-6">
            <div className="text-sm font-semibold text-emerald-700 mb-3">After</div>
            <ul className="space-y-3 text-gray-700">
              {[
                "Walk in, tap once, and the room just works",
                "Clear audio that makes your team sound as sharp as they are",
                "Thoughtful camera angles that keep everyone in frame",
                "Simple, standardized controls your whole team can operate",
                "Partners trust the room again; clients feel the firm is “on it”",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-emerald-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
