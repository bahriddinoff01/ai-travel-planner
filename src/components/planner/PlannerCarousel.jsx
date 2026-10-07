import { ChevronLeft, ChevronRight } from "lucide-react";
import destinations from "../../data/destinations";
import { useState } from "react";

const PlannerCarousel = () => {
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);

  const [tripDuration, setTripDuration] = useState(null);
  const [customDuration, setCustomDuration] = useState("");
  const [isCustom, setIsCustom] = useState(false);
  const [durationError, setDurationError] = useState("");
  const [destinationError, setDestinationError] = useState("");

  const [budget, setBudget] = useState("");
  const [currency, setCurrency] = useState("USD");

  const [interests, setInterests] = useState([]);
  const [likes, setLikes] = useState([]);
  const [dislikes, setDislikes] = useState([]);

  const [travelStyle, setTravelStyle] = useState("");

  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState("");
  const [error, setError] = useState("");

  const durationOptions = [2, 3, 4, 5, 7];

  const carouselImg = destinations.filter(
    (destination) => destination.popularPlaces === true
  );

  const interestOptions = [
    "History",
    "Nature",
    "Gaming",
    "Shopping",
    "Culture",
    "Beach",
    "Adventure",
    "Nightlife",
  ];

  const foodOptions = [
    "Korean food",
    "Chicken",
    "Beef",
    "Pizza",
    "Fast food",
    "Vegetarian food",
    "Desserts",
    "Seafood",
  ];

  const travelStyles = [
    "Budget",
    "Comfort",
    "Luxury",
    "Adventure",
    "Relaxed",
  ];

  const toggleItem = (item, list, setList) => {
    if (list.includes(item)) {
      setList(list.filter((value) => value !== item));
    } else {
      setList([...list, item]);
    }
  };

  const handleNext = async () => {
    if (currentStep === 0 && !selectedDestination) {
      setDestinationError("Please select a destination to continue.");
      return;
    }

    if (currentStep === 1 && !tripDuration) {
      setDestinationError("Please select a destination period.");
      return;
    }

    if (currentStep === 2 && (!budget || Number(budget) <= 0)) {
      setError("Please enter your budget.");
      return;
    }

    if (currentStep === 4) {
      await generatePlan();
      return;
    }

    setDestinationError("");
    setError("");

    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setError("");
    }
  };

  const generatePlan = async () => {
    setLoading(true);
    setError("");
    setPlan("");

    try {
      const response = await fetch(
        "https://ai-travel-planner-backend-0xes.onrender.com/api/travel/plan",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            destination: selectedDestination.name,
            budget: Number(budget),
            currency,
            days: Number(tripDuration),
            interests,
            likes,
            dislikes,
            travelStyle,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to create travel plan");
      }

      setPlan(data.plan);
      setCurrentStep(5);
    } catch (error) {
      console.error(error);
      setError("Failed to create travel plan. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="px-6 py-8 lg:px-12 xl:px-16">
      <div className="mx-auto max-w-6xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900">

        {currentStep === 5 && (
          <div>
            <div className="mb-8 text-center">
              <span className="text-sm font-medium text-green-600">
                YOUR TRAVEL PLAN
              </span>

              <h2 className="mt-3 text-2xl font-bold sm:text-3xl dark:text-white">
                Your personalized trip is ready!
              </h2>

              <p className="mt-3 text-slate-500 dark:text-slate-400">
                {selectedDestination?.name} · {tripDuration} days ·{" "}
                {budget} {currency}
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-6 dark:bg-slate-800">
              <pre className="whitespace-pre-wrap font-sans text-sm leading-7 text-slate-700 dark:text-slate-200">
                {plan}
              </pre>
            </div>

            <div className="mt-8 flex justify-center">
              <button
                onClick={() => {
                  setCurrentStep(0);
                  setPlan("");
                }}
                className="rounded-xl bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
              >
                Create New Plan
              </button>
            </div>
          </div>
        )}

        {currentStep === 0 && (
          <div>
            <div className="mb-8 text-center">
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                STEP 1 OF 5
              </span>

              <h2 className="mt-3 text-2xl font-bold sm:text-3xl dark:text-white">
                Let's build your journey
              </h2>

              <p className="mt-3 text-slate-500 dark:text-slate-400">
                Tell us where you want to go and we'll help you plan the
                perfect trip.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {carouselImg.map((destination) => (
                <button
                  key={destination.id}
                  className="group relative h-40 overflow-hidden rounded-2xl text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  onClick={() => {
                    setSelectedDestination(destination);
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
                    <div className="absolute left-3 top-3 text-3xl font-bold text-white">
                      ✓
                    </div>
                  )}

                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

                  <div className="absolute bottom-0 left-0 p-4">
                    <h3 className="text-lg font-semibold text-white">
                      {destination.name}
                    </h3>

                    <p className="text-sm text-white/70">
                      Explore destination
                    </p>
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
                STEP 2 OF 5
              </span>

              <h2 className="mt-3 text-2xl font-bold sm:text-3xl dark:text-white">
                Select duration of your stay
              </h2>

              <p className="mt-3 text-slate-500 dark:text-slate-400">
                Tell us how many days you are going to spend in{" "}
                {selectedDestination?.name}
              </p>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {durationOptions.map((days) => (
                <button
                  onClick={() => {
                    setTripDuration(days);
                    setDurationError("");
                    setDestinationError("");
                  }}
                  className={`rounded-2xl border ${
                    tripDuration === days
                      ? "border-4 border-blue-600 bg-blue-50 dark:border-white dark:bg-blue-900/30"
                      : "border-slate-200 dark:border-slate-700"
                  } p-5 text-center transition hover:-translate-y-1 hover:border-blue-400 hover:shadow-md dark:bg-slate-900`}
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
                className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-5 text-center transition hover:-translate-y-1 hover:border-blue-400 hover:shadow-md dark:border-slate-600 dark:bg-slate-800"
              >
                <span className="block text-2xl font-semibold dark:text-white">
                  ✎
                </span>

                <span className="text-sm text-slate-500 dark:text-slate-400">
                  Custom
                </span>
              </button>
            </div>

            {isCustom && (
              <div className="mt-6 flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800">
                <input
                  type="number"
                  value={customDuration}
                  onChange={(e) => setCustomDuration(e.target.value)}
                  placeholder="Enter days"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-center text-lg font-medium outline-none focus:border-blue-500 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
                />

                <span className="shrink-0 text-sm text-slate-500">
                  days
                </span>

                <button
                  onClick={() => {
                    const days = Number(customDuration);

                    if (days < 1 || days > 30) {
                      setDurationError(
                        "Please enter a duration between 1 and 30 days."
                      );
                      return;
                    }

                    setTripDuration(days);
                    setDurationError("");
                    setIsCustom(false);
                  }}
                  className="shrink-0 rounded-xl bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700"
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
        )}

        {currentStep === 2 && (
          <div>
            <div className="text-center">
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                STEP 3 OF 5
              </span>

              <h2 className="mt-3 text-2xl font-bold sm:text-3xl dark:text-white">
                What's your budget?
              </h2>

              <p className="mt-3 text-slate-500 dark:text-slate-400">
                Set the approximate budget for your trip.
              </p>
            </div>

            <div className="mx-auto mt-8 max-w-md">
              <div className="flex gap-3">
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                >
                  <option value="USD">USD</option>
                  <option value="KRW">KRW</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                </select>

                <input
                  type="number"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  placeholder="Enter budget"
                  className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                />
              </div>

              {error && (
                <p className="mt-3 text-center text-sm text-red-500">
                  {error}
                </p>
              )}
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div>
            <div className="text-center">
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                STEP 4 OF 5
              </span>

              <h2 className="mt-3 text-2xl font-bold sm:text-3xl dark:text-white">
                What are you interested in?
              </h2>

              <p className="mt-3 text-slate-500 dark:text-slate-400">
                Select everything you would like to experience.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {interestOptions.map((item) => (
                <button
                  key={item}
                  onClick={() =>
                    toggleItem(item, interests, setInterests)
                  }
                  className={`rounded-xl border p-4 font-medium transition ${
                    interests.includes(item)
                      ? "border-blue-600 bg-blue-50 text-blue-600 dark:bg-blue-900/30"
                      : "border-slate-200 dark:border-slate-700 dark:text-white"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div>
            <div className="text-center">
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                STEP 5 OF 5
              </span>

              <h2 className="mt-3 text-2xl font-bold sm:text-3xl dark:text-white">
                Tell us your travel preferences
              </h2>

              <p className="mt-3 text-slate-500 dark:text-slate-400">
                Choose your travel style and food preferences.
              </p>
            </div>

            <h3 className="mt-8 font-semibold dark:text-white">
              Travel style
            </h3>

            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-5">
              {travelStyles.map((style) => (
                <button
                  key={style}
                  onClick={() => setTravelStyle(style)}
                  className={`rounded-xl border p-4 font-medium ${
                    travelStyle === style
                      ? "border-blue-600 bg-blue-50 text-blue-600 dark:bg-blue-900/30"
                      : "border-slate-200 dark:border-slate-700 dark:text-white"
                  }`}
                >
                  {style}
                </button>
              ))}
            </div>

            <h3 className="mt-8 font-semibold dark:text-white">
              Foods you like
            </h3>

            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {foodOptions.map((food) => (
                <button
                  key={food}
                  onClick={() => toggleItem(food, likes, setLikes)}
                  className={`rounded-xl border p-3 ${
                    likes.includes(food)
                      ? "border-green-600 bg-green-50 text-green-600"
                      : "border-slate-200 dark:border-slate-700 dark:text-white"
                  }`}
                >
                  {food}
                </button>
              ))}
            </div>

            <h3 className="mt-8 font-semibold dark:text-white">
              Foods you dislike
            </h3>

            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {foodOptions.map((food) => (
                <button
                  key={food}
                  onClick={() =>
                    toggleItem(food, dislikes, setDislikes)
                  }
                  className={`rounded-xl border p-3 ${
                    dislikes.includes(food)
                      ? "border-red-600 bg-red-50 text-red-600"
                      : "border-slate-200 dark:border-slate-700 dark:text-white"
                  }`}
                >
                  {food}
                </button>
              ))}
            </div>
          </div>
        )}

        {currentStep < 5 && (
          <div className="mt-8 flex items-center justify-between">

            <button
              onClick={handleBack}
              disabled={currentStep === 0 || loading}
              className="flex items-center gap-2 rounded-xl px-4 py-2 text-slate-500 hover:bg-slate-100 disabled:opacity-40 dark:hover:bg-slate-800"
            >
              <ChevronLeft size={20} />
              Back
            </button>

            <div className="flex items-center gap-2">
              {[0, 1, 2, 3, 4].map((step) => (
                <span
                  key={step}
                  className={`h-2.5 rounded-full ${
                    currentStep === step
                      ? "w-8 bg-blue-600"
                      : "w-2.5 bg-slate-300 dark:bg-slate-600"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              disabled={loading}
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-white hover:bg-blue-700 disabled:opacity-60"
            >
              {loading ? "Creating..." : currentStep === 4 ? "Generate Plan" : "Next"}

              {!loading && currentStep < 4 && (
                <ChevronRight size={20} />
              )}
            </button>

          </div>
        )}

        {error && currentStep === 4 && (
          <p className="mt-4 text-center text-sm text-red-500">
            {error}
          </p>
        )}

      </div>
    </section>
  );
};

export default PlannerCarousel;