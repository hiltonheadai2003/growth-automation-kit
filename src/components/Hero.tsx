import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import { CaseStudiesMarquee } from "@/components/CaseStudies";
import { caseStudies } from "@/data/caseStudies";

const Hero = () => {
  const headlineWords = ["Smart", "Automation", "for"];
  const gradientWords = ["Local", "Business", "Growth"];

  return (
    <section id="hero" className="relative flex min-h-[100dvh] flex-col overflow-x-hidden pt-20 pb-4 sm:pb-6">
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="AI Technology Background" className="h-full w-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
        <div className="absolute inset-0 gradient-hero" />
      </div>

      <div className="absolute inset-0 z-0">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 animate-pulse rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 animate-pulse rounded-full bg-accent/5 blur-3xl delay-1000" />
      </div>

      <div className="relative z-10 flex w-full flex-col">
        <div className="container mx-auto shrink-0 px-4 pb-3 pt-6 sm:px-6 sm:pb-4 sm:pt-8 lg:px-8">
          <div className="mx-auto max-w-5xl space-y-3 text-center sm:space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-slate-700 px-4 py-2 font-mono text-sm font-medium text-primary backdrop-blur-sm"
            >
              <Sparkles className="h-4 w-4 text-primary" />
              <span>AI-Powered Business Automation</span>
            </motion.div>

            <h1 className="font-display font-bold leading-tight text-foreground">
              <span className="block sm:inline">
                {headlineWords.map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                    className="mr-[0.3em] inline-block text-3xl sm:text-5xl"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
              <br className="hidden sm:block" />
              <span className="block sm:inline">
                {gradientWords.map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                    className="mr-[0.3em] block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-4xl text-transparent sm:inline-block sm:text-6xl lg:text-7xl"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            </h1>
          </div>
        </div>

        <div id="case-studies" className="relative mt-1 w-full shrink-0 scroll-mt-24 sm:mt-2">
          <CaseStudiesMarquee cases={caseStudies} embedded />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="container mx-auto flex shrink-0 flex-wrap items-center justify-center gap-6 px-4 pb-1 pt-4 text-muted-foreground sm:gap-8 sm:px-6 sm:pt-5 lg:px-8"
        >
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-primary" />
            <span className="font-mono text-sm">AI-Powered</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-secondary" />
            <span className="font-mono text-sm">24/7 Automation</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-accent" />
            <span className="font-mono text-sm">Easy Setup</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
