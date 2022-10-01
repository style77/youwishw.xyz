import type { NextPage } from 'next'

import React, { useEffect, useState } from "react"

import Head from 'next/head'
import Image from 'next/image'

import { Main } from 'next/document';

import { FiGithub, FiMail, FiX } from 'react-icons/fi'
import { Tooltip } from '../components/tooltip';

const MAIL = "stylek777@gmail.com"
const GITHUB = "Style77"

const Home: NextPage = () => {
  const [ShowTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    const replace = () => {
      setTimeout(function () {
        var replacers = document.querySelectorAll('[data-replace]');
        for (var i = 0; i < replacers.length; i++) {
          let replaceClasses = JSON.parse(replacers[i].dataset.replace.replace(/'/g, '"'));
          Object.keys(replaceClasses).forEach(function (key) {
            replacers[i].classList.remove(key);
            replacers[i].classList.add(replaceClasses[key]);
          });
        }
      }, 1);
    }
    replace()
  }, [])

  const showTooltip = () => {
    setShowTooltip(true)
  }

  return (
    <div className="grid h-screen place-items-center">
      <Head>
        <title>youwish.dev</title>
      </Head>
      <div className="select-none">
        <div className="cursor-default duration-700 relative transform opacity-0 transition-all translate-y-12 ease-out" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
          <span className="text-6xl text-slate-100 font-light antialiased block mb-2 transition ease-in-out duration-300 hover:text-slate-100">youwish</span>
          <span className="text-xl text-slate-300 font-light antialiased transition ease-in-out duration-300 hover:text-slate-200">Developer for your needs</span>
        </div>
        <div className="inline-grid grid-cols-3 gap-5 mt-5 inline">
          <div id="github" className="delay-300 duration-700 relative transform opacity-0 transition-all translate-y-12 ease-out inline" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
            <a href={`https://github.com/${GITHUB}`}>
              <div className="h-14 w-14 rounded-full bg-slate-400 transition ease-in-out duration-300 hover:bg-slate-100 grid place-items-center">
                <FiGithub className="h-7 w-7 block m-auto" />
              </div>
            </a>
          </div>
          <div id="contact" className="delay-[600ms] duration-700 relative transform opacity-0 transition-all translate-y-12 ease-out inline" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
            <a href={`mailto:${MAIL}`}>
              <div className="h-14 w-14 rounded-full bg-slate-400 transition ease-in-out duration-300 hover:bg-slate-100 grid place-items-center">
                <FiMail className="h-7 w-7 block m-auto" />
              </div>
            </a>
          </div>
          <div id="TODO" className="delay-[900ms] duration-700 relative transform opacity-0 transition-all translate-y-12 ease-out inline" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
            <Tooltip message="apps should be always scallable ig">
              <div className="h-14 w-14 rounded-full bg-slate-400 transition ease-in-out duration-300 grid place-items-center">
                <FiX className="h-7 w-7 block m-auto" />
              </div>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home
