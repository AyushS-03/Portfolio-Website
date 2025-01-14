'use client'

import Image from 'next/image'
import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"

const certificates = [
  {
    title: 'AWS Cloud Technical',
    issuer: 'AWS, Coursera',
    year: '2024',
    image: 'https://i.ibb.co/zVD31C9/Coursera-DQOSA4-EK1-R20-page-0001.jpg'
  },
  {
    title: 'Machine Learning Specialization',
    issuer: 'IBM, Coursera',
    year: '2024',
    image: 'https://i.ibb.co/cLLBk3x/Coursera-153-GRYA1-UZK0-page-0001.jpg'
  },
  {
    title: 'Web Development Bootcamp',
    issuer: 'Udemy',
    year: '2023',
    image: 'https://i.ibb.co/jw20mtg/UC-8d7ec6ab-0122-4499-89de-6e5730affb86.jpg'
  }
]

export default function CertificatesSection() {
  return (
    <div className="p-4 sm:p-6 md:p-8 space-y-6">
      <h2 className="text-xl font-semibold mb-4">Certificates</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert, index) => (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <div className="flex flex-col bg-white rounded-lg p-4 shadow cursor-pointer hover:bg-gray-50 transition-all duration-200 ease-in-out transform hover:scale-105">
                <div className="w-full h-40 bg-gray-200 rounded-lg relative overflow-hidden mb-4">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="rounded-lg object-cover"
                    unoptimized
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{cert.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">Issuer: {cert.issuer}</p>
                  <p className="text-sm text-gray-500">Year: {cert.year}</p>
                  <p className="text-sm text-blue-600 mt-2">Click to view certificate</p>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-3xl">
              <div className="relative w-full aspect-[1.414/1]">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  )
}

