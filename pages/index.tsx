import type { NextPage } from 'next'

import React, { useEffect, useState } from "react"

import { FiGithub, FiMail, FiX } from 'react-icons/fi'
import { Tooltip } from '../components/tooltip'

import { NextSeo } from 'next-seo'

const MAIL = "stylek777@gmail.com"
const GITHUB = "Style77"

const Home: NextPage = () => {

  useEffect(() => {
    const replace = () => {
      setTimeout(function () {
        var replacers = document.querySelectorAll('[data-replace]')
        for (const replacer of replacers) {
          if (replacer instanceof HTMLElement) {
            const replacerDataset = replacer.dataset.replace!
            let replaceClasses = JSON.parse(replacerDataset.replace(/'/g, '"'))
            Object.keys(replaceClasses).forEach(function (key) {
              replacer.classList.remove(key)
              replacer.classList.add(replaceClasses[key])
            })
          }
        }
      }, 1)
    }
    replace()
  }, [])

  return (
    <>
      <NextSeo title="youwish - a developer for your needs"
        description='Developer for your needs - Python/Javascript/TypeScript/Golang/React/Next and many more!'
        canonical="https://youwishw.xyz/"
        openGraph={{
          url: 'https://',
          title: 'youwish - a developer for your needs',
          description: 'Developer for your needs - Python/Javascript/TypeScript/Golang/React/Next and many more!',
          site_name: 'youwishw.xyz',
        }}
      />
      <div className="grid h-screen place-items-center z-index-10">
        <div className="select-none">
          <div className="cursor-default duration-700 relative transform opacity-0 transition-all translate-y-12 ease-out" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
            <h1 className="text-6xl text-slate-100 font-light antialiased block mb-2 transition ease-in-out duration-300 hover:text-slate-100" id="title">youwish </h1>
            <h4 className="text-xl text-slate-300 font-light antialiased transition ease-in-out duration-300 hover:text-slate-200" id="subtitle">a developer for your needs</h4>
          </div>
          <div className="inline-grid grid-cols-3 gap-6 mt-5 inline z-index-10">
            <div id="github" className="delay-300 duration-700 relative transform opacity-0 transition-all translate-y-12 ease-out inline" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
              <a href={`https://github.com/${GITHUB}`}>
                <div className="h-14 w-14 rounded-full bg-violet-900 text-slate-200 transition ease-in-out duration-300 hover:bg-slate-100 hover:text-zinc-900 grid place-items-center">
                  <FiGithub className="h-7 w-7 block m-auto" />
                </div>
              </a>
            </div>
            <div id="contact" className="delay-[600ms] duration-700 relative transform opacity-0 transition-all translate-y-12 ease-out inline" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
              <a href={`mailto:${MAIL}`}>
                <div className="h-14 w-14 rounded-full bg-violet-900 text-slate-200 transition ease-in-out duration-300 hover:bg-slate-100 hover:text-zinc-900 grid place-items-center">
                  <FiMail className="h-7 w-7 block m-auto" />
                </div>
              </a>
            </div>
            <div id="TODO" className="delay-[900ms] duration-700 relative transform opacity-0 transition-all translate-y-12 ease-out inline" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
              <Tooltip message="TBA (apps should be always scallable anyway ig)">
                <div className="h-14 w-14 rounded-full bg-violet-900 text-slate-200 transition ease-in-out duration-300 grid place-items-center">
                  <FiX className="h-7 w-7 block m-auto" />
                </div>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home
