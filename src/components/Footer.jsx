import { useState } from 'react'

function LangDropdownFooter({ open }) {
  if (!open) return null
  return (
    <div className="absolute top-10 left-0 w-[260px] bg-white p-[15px] rounded-md shadow-[0_4px_10px_rgba(0,0,0,0.2)] z-[100]">
      <p className="font-bold">Change language</p>
      <label className="block my-[3px] cursor-pointer text-sm">
        <input type="checkbox" name="lang" defaultChecked className="mr-1.5 accent-orange-500" /> English - EN
      </label>
      <hr />
      <label className="block my-[3px] cursor-pointer text-sm">
        <input type="checkbox" className="mr-1.5 accent-orange-500" /> español - ES
      </label>
      <label className="block my-[3px] cursor-pointer text-sm">
        <input type="checkbox" className="mr-1.5 accent-orange-500" /> العربية - AR
      </label>
      <label className="block my-[3px] cursor-pointer text-sm">
        <input type="checkbox" className="mr-1.5 accent-orange-500" /> Deutsch - DE
      </label>
      <label className="block my-[3px] cursor-pointer text-sm">
        <input type="checkbox" className="mr-1.5 accent-orange-500" /> Deutsch - DE
      </label>
      <label className="block my-[3px] cursor-pointer text-sm">
        <input type="checkbox" className="mr-1.5 accent-orange-500" /> Deutsch - DE
      </label>
      <label className="block my-[3px] cursor-pointer text-sm">
        <input type="checkbox" className="mr-1.5 accent-orange-500" /> Deutsch - DE
      </label>
      <hr />
      <p className="font-bold">Change currency</p>
      <label className="block my-[3px] cursor-pointer text-sm">
        <input type="checkbox" defaultChecked className="mr-1.5 accent-orange-500" /> PKR - Pakistani Rupee
      </label>
      <label className="block my-[3px] cursor-pointer text-sm">
        <input type="checkbox" className="mr-1.5 accent-orange-500" /> $ - USD - US Dollar
      </label>
      <p className="text-[rgb(67,67,208)] mb-1.5 cursor-pointer">See all</p>
      <hr />
      <p className="flex items-center gap-[5px]">
        <img className="w-5 h-5" src="/images/united-states.png" alt="" />
        You are shopping on
        <br /> Amazon.com
      </p>
      <p className="text-[rgb(67,67,208)] mb-1.5 text-center cursor-pointer">Change Country/region</p>
    </div>
  )
}

const thirdRowData = [
  [{ title: 'Amazon', desc: 'Sream Million of Nasheeds' }, { title: 'Amazon', desc: 'Sream Million of Nasheeds' }, { title: 'Amazon', desc: 'Sream Million of Nasheeds' }],
  [{ title: 'Amazon', desc: 'Sream Million of Nasheeds' }, { title: 'Amazon', desc: 'Sream Million of Nasheeds' }, { title: 'Amazon', desc: 'Sream Million of Nasheeds' }, { title: 'Amazon', desc: 'Sream Million of Nasheeds' }],
  [{ title: 'Amazon', desc: 'Sream Million of Nasheeds' }, { title: 'Amazon', desc: 'Sream Million of Nasheeds' }, { title: 'Amazon', desc: 'Sream Million of Nasheeds' }, { title: 'Amazon', desc: 'Sream Million of Nasheeds' }, { title: 'Amazon', desc: 'Sream Million of Nasheeds' }],
  [{ title: 'Amazon', desc: 'Sream Million of Nasheeds' }, { title: 'Amazon', desc: 'Sream Million of Nasheeds' }, { title: 'Amazon', desc: 'Sream Million of Nasheeds' }],
]

const fourthRowLinks = ['Conditions of Use', 'Privacy Notice', 'Consumer Health', 'Data Privacy', 'Disclosure', 'Your Ads Privacy Choices']

export default function Footer({ columns }) {
  const [langOpen, setLangOpen] = useState(false)

  return (
    <footer className="bg-amazon-dark">
      <div className="w-[60vw] mx-auto flex flex-wrap justify-between items-center py-5 border-b border-[rgb(125,123,123)]">
        {columns.map((col, i) => (
          <div key={i} className="flex flex-col">
            <h3 className="text-white mb-2.5">{col.title}</h3>
            {col.links.map((link) => (
              <p key={link} className="text-white mb-2.5">
                {link}
              </p>
            ))}
          </div>
        ))}
      </div>

      <div className="mt-5 w-[50vw] mx-auto flex justify-between pb-[30px]">
        <div>
          <img className="w-[114px] h-[46px]" src="/images/Amazon logo.png" alt="" />
        </div>
        <div
          className="relative flex items-center gap-1 px-[5px] cursor-pointer"
          onMouseEnter={() => setLangOpen(true)}
          onMouseLeave={() => setLangOpen(false)}
        >
          <img className="w-5 h-5" src="/images/united-states.png" alt="" />
          <h4 className="text-white mx-[5px]">EN</h4>
          <img className="w-2.5 h-2.5" src="/images/down-chevron.png" alt="" />
          <LangDropdownFooter open={langOpen} />
        </div>
        <div className="text-white p-[15px] border border-[#a3a5a5] rounded-[5px]">
          <h4>$ USD US-Dollar</h4>
        </div>
        <div className="flex text-white p-[15px] border border-[#a3a5a5] rounded-[5px]">
          <img className="w-5 h-[15px]" src="/images/Amerika image.webp" alt="" />
          <h4 className="ml-[5px]">United-states</h4>
        </div>
      </div>

      <hr className="w-[60vw] mx-auto h-0.5 bg-[rgba(194,187,187,0.444)] border-none" />

      <div className="mt-5 w-[60vw] mx-auto flex justify-between pb-[30px]">
        {thirdRowData.map((col, i) => (
          <div key={i} className="flex flex-col">
            {col.map((item, j) => (
              <div key={j} className="leading-[30px]">
                <h3 className="text-[rgba(255,255,255,0.641)]">{item.title}</h3>
                <p className="text-[rgba(255,255,255,0.322)]">{item.desc}</p>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="mt-[15px] w-[50vw] mx-auto flex justify-between pb-2">
        {fourthRowLinks.map((link) => (
          <div key={link} className="text-[rgba(255,255,255,0.641)]">
            {link}
          </div>
        ))}
      </div>

      <div className="text-[rgba(255,255,255,0.641)] text-center pb-[30px]">
        © 1996-2026, Amazon.com, Inc. or its affiliates
      </div>
    </footer>
  )
}
