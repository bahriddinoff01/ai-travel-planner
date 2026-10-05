import { ChevronLeft, ChevronRight } from "lucide-react";
import destinations from "../../data/destinations";
import { div, h1 } from "framer-motion/client";
import { useState } from "react";

const PlannerCarousel = () => {
  const [selectedDestination, setselectedDestination] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [tripDuration, setTripDuration] = useState(null);
  const [customDuration, setCustomDuration] = useState("");
  const [isCustom, setIsCustom] = useState(false);
  const [durationError, setDurationError] = useState("");
  const [destinationError, setDestinationError] = useState("");
  const durationOptions = [2, 3, 4, 5, 7];
  console.log(durationError);
  console.log(customDuration);

  const handleNext = () => {
    if (currentStep === 0 && !selectedDestination) {
      setDestinationError("Please select a destination to continue.");
      return;
    }
    if (currentStep === 1 && !tripDuration) {
      setDestinationError("Please select a destination period.");
      return;
    }

    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };
  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  const carouselImg = destinations.filter(
    (destinations) => destinations.popularPlaces === true,
  );
  return (
    <section className="px-6 py-8 lg:px-12 xl:px-16">
      {/* Planning stage */}
      <div className="mx-auto max-w-6xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900">
        {/* Temporary content */}
        {currentStep === 0 && (
          <div>
            <div className="mb-8 text-center">
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                STEP {currentStep + 1} OF 5
              </span>

              <h2 className="mt-3 text-2xl font-bold sm:text-3xl dark:text-white">
                Let's build your journey
              </h2>

              <p className="mt-3 text-slate-500 dark:text-slate-400">
                Tell us where you want to go and we'll help you plan the perfect
                trip.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {carouselImg.map((destination) => (
                <button
                  key={destination.id}
                  className="group relative h-40 overflow-hidden rounded-2xl text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  onClick={() => {
                    setselectedDestination(destination);
                    setDestinationError("");
                  }}
                >
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className={`h-full w-full object-cover ${
                      selectedDestination?.id === destination.id
                        ? "ring-4 ring-blue-500 ring-offset-2"
                        : ""
                    } transition-transform duration-500 group-hover:scale-110`}
                  />
                  {selectedDestination?.id === destination.id && (
                    <div className="absolute left-3 top-3 text-3xl font-bold">
                      ✓
                    </div>
                  )}
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Country name */}
                  <div className="absolute bottom-0 left-0 p-4">
                    <h3 className="text-lg font-semibold text-white">
                      {destination.name}
                    </h3>
                    <p className="text-sm text-white/70">Explore destination</p>
                  </div>
                </button>
              ))}
            </div>
            {destinationError && (
              <p className="mt-4 text-center text-sm text-red-500">
                {destinationError}
              </p>
            )}
          </div>
        )}

        {currentStep === 1 && (
          <div>
            <div className="text-center">
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                STEP {currentStep + 1} OF 5
              </span>

              <h2 className="mt-3 text-2xl font-bold sm:text-3xl dark:text-white">
                Select duration of your stay
              </h2>

              <p className="mt-3 text-slate-500 dark:text-slate-400">
                Tell us how many days you are going to spend in{" "}
                {selectedDestination?.name}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 mt-5">
              {durationOptions.map((days) => (
                <button
                  onClick={() => setTripDuration(days)}
                  className={`rounded-2xl border ${
                    tripDuration === days
                      ? "dark:border-white border-4 bg-blue-50 border-blue-600 dark:bg-blue-900/30"
                      : "border-slate-200 dark:border-slate-700"
                  } p-5 text-center transition hover:-translate-y-1 hover:border-blue-400 hover:shadow-md dark:border-slate-700 dark:bg-slate-900`}
                  key={days}
                >
                  <span className="block text-3xl font-bold dark:text-white">
                    {days}
                  </span>
                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    days
                  </span>
                </button>
              ))}

              <button
                onClick={() => setIsCustom(true)}
                className={`rounded-2xl border border-dashed ${tripDuration !== null && !durationOptions.includes(tripDuration) ? "dark:border-white border-4 bg-blue-50 border-blue-600 dark:bg-blue-900/30" : "border-slate-200 dark:border-slate-700"} border-slate-300 bg-slate-50 p-5 text-center transition hover:-translate-y-1 hover:border-blue-400 hover:shadow-md dark:border-slate-600 dark:bg-slate-800`}
              >
                {tripDuration !== null &&
                !durationOptions.includes(tripDuration) ? (
                  <span className="block text-2xl font-semibold dark:text-white">
                    {tripDuration} days
                  </span>
                ) : (
                  <div className="flex justify-center items-center gap-2">
                    <span className="block text-2xl font-semibold dark:text-white">
                      ✎
                    </span>
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      Custom
                    </span>
                  </div>
                )}
                {/* <span className="block text-2xl font-semibold dark:text-white">
                  ✎
                </span>
                <span className="text-sm text-slate-500 dark:text-slate-400">
                  Custom
                </span> */}
              </button>
              <div className="mt-6 flex flex-col items-center">
                {isCustom && (
                  <div className="flex w-full items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800">
                    <input
                      type="number"
                      value={customDuration}
                      onChange={(e) => setCustomDuration(e.target.value)}
                      placeholder="Enter days"
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-center text-lg font-medium outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-600 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-500"
                    />

                    <span className="shrink-0 text-sm text-slate-500 dark:text-slate-400">
                      days
                    </span>

                    <button
                      onClick={() => {
                        const days = Number(customDuration);

                        if (days < 1 || days > 30) {
                          setDurationError(
                            "Please enter a duration between 1 and 30 days.",
                          );
                          return;
                        }

                        setTripDuration(days);
                        setDurationError("");
                        setIsCustom(false);
                      }}
                      className="shrink-0 rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700 active:scale-95"
                    >
                      Apply
                    </button>
                  </div>
                )}

                {durationError && (
                  <p className="mt-2 text-center text-sm text-red-500">
                    {durationError}
                  </p>
                )}
              </div>
              {destinationError && (
                <p className="mt-4 text-center text-sm text-red-500">
                  {destinationError}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="mt-8 flex items-center justify-between">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 rounded-xl px-4 py-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <ChevronLeft size={20} />
            Back
          </button>

          <div className="flex items-center gap-2">
            <span className="h-2.5 w-8 rounded-full bg-blue-600" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-600" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-600" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-600" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-600" />
          </div>

          <button
            onClick={handleNext}
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-white hover:bg-blue-700"
          >
            Next
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PlannerCarousel;
