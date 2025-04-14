"use client";

import { Card, CardContent } from "@/components/ui/card"; // Assuming shadcn or aceternity-style UI
import Image from "next/image";
import { motion } from "framer-motion";
import { Cover } from "./ui/cover";
// import { useState } from "react";

const certificates = [
  {
    title: "Oracle Cloud Infrastructure 2024 Certified Foundation Associate",
    issuer: "Oracle",
    image: "/certificates/oracle-cloud.png",
    date: "Jan 2025",
  },
  {
    title: "AWS Academy Cloud Foundations",
    issuer: "AWS Academy",
    image: "/certificates/AWS-Cloud.png",
    date: "Jan 2024",
  },
  {
    title: "AWS Academy Machine Learning Foundations",
    issuer: "AWS Academy",
    image: "/certificates/AWS-Machine.png",
    date: "Jan 2024",
  },
  {
    title: "Introduction to Internet of Things",
    issuer: "Cisco Networking Academy",
    image: "/certificates/cisco-iot.png",
    date: "April 2024",
  },
  {
    title: "Networking Basics",
    issuer: "Cisco Networking Academy",
    image: "/certificates/cisco-networking.png",
    date: "Nov 2024",
  },
  {
    title: "Introduction to Machine Learning",
    issuer: "NPTEL",
    image: "/certificates/nptel-machinelearning.png",
    date: "Nov 2024",
  },
  {
    title: "Computer Architecture",
    issuer: "NPTEL",
    image: "/certificates/nptel-ca.png",
    date: "Nov 2023",
  },
  {
    title: "Programming in Java",
    issuer: "NPTEL",
    image: "/certificates/nptel-java.png",
    date: "Nov 2024",
  },
  {
    title: "DBMS Course",
    issuer: "Scaler",
    image: "/certificates/scaler-dbms.png",
    date: "April 2024",
  },
  // Add more...
];

export default function CertificatePage() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden px-4 py-10">
      {/* Star Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="stars" />
        <div className="shooting-star" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <Cover> My Certificates</Cover>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {certificates.map((cert, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="transition-transform duration-300"
            >
              <Card className="bg-zinc-900 text-white border border-zinc-700 shadow-xl">
                <CardContent className="p-0">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    width={500}
                    height={300}
                    className="rounded-t-xl w-full object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-semibold">{cert.title}</h2>
                    <p className="text-sm text-zinc-400">{cert.issuer}</p>
                    <p className="text-xs text-zinc-500 mt-1">{cert.date}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
