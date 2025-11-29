export default function SmartRoomProblem() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="max-w-4xl space-y-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Every Fumbled Meeting Chips Away at Your Credibility
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            The first 10 minutes of a hybrid client call shouldn’t be cable hunts, “Can you hear me?” loops, or partners crowding around a laptop because the room mic echoes. Clients notice—even if they never say a word.
          </p>
          <ul className="space-y-3 text-gray-700 text-base leading-relaxed">
            {[
              "Cable hunts, audio dropouts, and awkward camera angles broadcast “we’re not ready.”",
              "Screen sharing roulette and confusing controls burn trust before the agenda even starts.",
              "Partners avoid the conference room; morale dips and quiet doubts about the firm’s professionalism creep in.",
              "Small delays compound into real costs: lost time, shaky confidence, and meetings that start on the back foot.",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-gray-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
