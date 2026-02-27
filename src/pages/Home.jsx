import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-green-50 to-white py-20 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-green-800 uppercase bg-green-100 rounded-full">
            Revolutionizing Rice Farming
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Protect Your Harvest with <span className="text-green-600">AI</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
            Instantly detect paddy leaf diseases using state-of-the-art Deep Learning. 
            Get expert treatment advice in seconds, right from your field.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/register" className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg shadow-green-200 hover:bg-green-700 hover:-translate-y-1 transition-all"
            style={{color:"white"}}>
              Start Free Scan
            </Link>
            <Link to="/login" className="bg-white text-gray-700 border border-gray-200 px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-50 transition-all">
              Member Login
            </Link>
          </div>
        </div>
      </section>

      {/* 2. FEATURES SECTION */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Choose PaddyScan?</h2>
            <div className="h-1 w-20 bg-green-500 mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon="⚡" 
              title="Real-time Analysis" 
              desc="Upload an image and get results in under 2 seconds with our optimized neural network."
            />
            <FeatureCard 
              icon="🎯" 
              title="High Accuracy" 
              desc="Trained on thousands of images to identify Blast, Brown Spot, and Hispa with 95%+ precision."
            />
            <FeatureCard 
              icon="💊" 
              title="Treatment Plans" 
              desc="Don't just detect—solve. Get detailed chemical and organic treatment recommendations."
            />
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS SECTION */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Three Steps to Healthy Crops</h2>
              <div className="space-y-6">
                <Step number="1" title="Capture" desc="Take a clear photo of the infected rice leaf." />
                <Step number="2" title="Upload" desc="Submit the photo to our AI cloud for instant processing." />
                <Step number="3" title="Recover" desc="Follow the suggested prevention and treatment steps." />
              </div>
            </div>
            <div className="flex-1 bg-green-100 rounded-3xl p-8 aspect-square flex items-center justify-center relative overflow-hidden">
               {/* Visual placeholder for an app mockup */}
               <div className="w-64 h-96 bg-slate-900 rounded-[3rem] border-8 border-slate-800 shadow-2xl relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-800 rounded-b-xl"></div>
                  <div className="p-4 pt-10 text-white text-[10px]">
                     <div className="w-full h-32 bg-green-800/50 rounded-lg mb-4 animate-pulse"></div>
                     <div className="h-2 w-3/4 bg-gray-700 rounded mb-2"></div>
                     <div className="h-2 w-1/2 bg-gray-700 rounded"></div>
                  </div>
               </div>
               <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-green-500/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION SECTION */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-green-700 rounded-[2.5rem] p-10 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-green-200">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">Ready to save your crops?</h2>
          <p className="text-green-100 mb-10 text-lg relative z-10">Join 500+ farmers using PaddyScan to improve their yield.</p>
          <Link to="/register" className="relative z-10 bg-white text-green-700 px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform inline-block">
            Get Started for Free
          </Link>
          {/* Decorative Circle */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-green-600 rounded-full opacity-50"></div>
        </div>
      </section>
    </div>
  );
}

// Sub-components for cleaner code
function FeatureCard({ icon, title, desc }) {
  return (
    <div className="p-8 border border-gray-100 rounded-3xl bg-white hover:shadow-xl transition-shadow group">
      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function Step({ number, title, desc }) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
        {number}
      </div>
      <div>
        <h4 className="font-bold text-gray-900">{title}</h4>
        <p className="text-gray-600 text-sm">{desc}</p>
      </div>
    </div>
  );
}

export default Home;