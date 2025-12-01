"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(2, "Company name is required"),
  interest: z.string().min(1, "Please select an interest"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(data);
    alert("Request received. We will contact you shortly.");
    reset();
  };

  return (
    <section id="contact" className="py-24 bg-obsidian-light relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-starlight mb-4">
            Begin Your Journey
          </h2>
          <p className="text-starlight/60">
            Tell us your vision. We'll handle the altitude.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-8 bg-white/5 p-8 md:p-12 rounded-xl border border-white/10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-sm font-medium text-starlight/80">
                Full Name
              </label>
              <input
                {...register("name")}
                className="w-full bg-obsidian border border-white/10 rounded-none p-3 text-starlight focus:border-glacial focus:outline-none transition-colors"
                placeholder="John Doe"
              />
              {errors.name && (
                <p className="text-red-400 text-xs">{errors.name.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-starlight/80">
                Work Email
              </label>
              <input
                {...register("email")}
                className="w-full bg-obsidian border border-white/10 rounded-none p-3 text-starlight focus:border-glacial focus:outline-none transition-colors"
                placeholder="john@company.com"
              />
              {errors.email && (
                <p className="text-red-400 text-xs">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-starlight/80">
                Company
              </label>
              <input
                {...register("company")}
                className="w-full bg-obsidian border border-white/10 rounded-none p-3 text-starlight focus:border-glacial focus:outline-none transition-colors"
                placeholder="Acme Corp"
              />
              {errors.company && (
                <p className="text-red-400 text-xs">{errors.company.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-starlight/80">
                Interest
              </label>
              <select
                {...register("interest")}
                className="w-full bg-obsidian border border-white/10 rounded-none p-3 text-starlight focus:border-glacial focus:outline-none transition-colors appearance-none"
              >
                <option value="">Select an option</option>
                <option value="dealer_meet">Dealer/Distributor Meet</option>
                <option value="incentive">Incentive Trip</option>
                <option value="conference">Annual Conference</option>
                <option value="other">Other</option>
              </select>
              {errors.interest && (
                <p className="text-red-400 text-xs">{errors.interest.message}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-starlight/80">
              Message (Optional)
            </label>
            <textarea
              {...register("message")}
              rows={4}
              className="w-full bg-obsidian border border-white/10 rounded-none p-3 text-starlight focus:border-glacial focus:outline-none transition-colors"
              placeholder="Tell us about your team size and preferred dates..."
            />
          </div>

          <div className="flex justify-center">
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full md:w-auto min-w-[200px]"
            >
              {isSubmitting ? "Sending..." : "Request Consultation"}
            </Button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
