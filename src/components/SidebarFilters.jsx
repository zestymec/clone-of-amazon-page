const filterSections = [
  {
    title: 'Conditions',
    items: [
      { label: 'Used', tag: 'Used' },
      { label: 'New', tag: 'New' },
    ],
  },
  {
    title: 'Products',
    items: [
      { label: 'Pc', tag: 'pc' },
      { label: 'Laptop', tag: 'laptop' },
      { label: 'Speakers', tag: 'speakers' },
      { label: 'Gaming-Xbox', tag: 'xbox' },
    ],
  },
  {
    title: 'Brands',
    items: [
      { label: 'Dell', tag: 'dell' },
      { label: 'Bloody', tag: 'bloody' },
      { label: 'Ryzen', tag: 'ryzen' },
      { label: 'X-box', tag: 'xbox' },
    ],
  },
  {
    title: 'Sellers',
    items: [
      { label: 'Amazon', tag: 'amazon' },
      { label: 'Amt-Games', tag: 'amt-games' },
      { label: 'Daddu-Charger', tag: 'dadducharger' },
      { label: 'lifeFour-Gaming', tag: 'lifefourgaming' },
    ],
  },
]

const shoppingIdeas = ['Keyboard & Mouse', 'Chair', 'Headset', 'Pc Speaker']
const deals = ['All Discounts', "Today's Deals"]

export default function SidebarFilters({ activeFilter, onFilterChange }) {
  const handleChange = (tag, checked) => {
    onFilterChange(checked ? tag : null)
  }

  return (
    <div className="hidden lg:flex flex-col w-[15vw] mx-auto">
      <h4 className="my-0.5 mb-3">Popular Shopping Ideas</h4>
      {shoppingIdeas.map((idea) => (
        <p key={idea} className="mb-[5px] hover:text-[rgb(217,86,39)] cursor-pointer">
          {idea}
        </p>
      ))}

      <hr className="text-[rgb(116,114,114)] w-full mt-2.5 mb-[5px]" />

      <h4 className="mb-2.5">Eligible for Free Shipping</h4>
      <div className="flex flex-row mb-[3px]">
        <input
          type="checkbox"
          className="w-5 h-5 appearance-none border-2 border-[#ccc] cursor-pointer outline-none mr-[5px] rounded checked:bg-[rgb(217,86,39)] checked:border-[rgb(217,86,39)]"
          checked={activeFilter === 'free-dellivery'}
          onChange={(e) => handleChange('free-dellivery', e.target.checked)}
        />
        <p className="ml-[3px] mb-[5px] hover:text-[rgb(217,86,39)] cursor-pointer">Free Shipping by Amazon</p>
      </div>

      {filterSections.map((section) => (
        <div key={section.title} className="leading-[25px] mb-2.5">
          <h4>{section.title}</h4>
          {section.items.map((item) => (
            <div key={`${section.title}-${item.label}`} className="flex flex-row hover:text-[rgb(217,86,39)]">
              <input
                type="checkbox"
                className="w-5 h-5 appearance-none border-2 border-[#ccc] cursor-pointer outline-none mr-[5px] rounded checked:bg-[rgb(217,86,39)] checked:border-[rgb(217,86,39)]"
                checked={activeFilter === item.tag}
                onChange={(e) => handleChange(item.tag, e.target.checked)}
              />
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      ))}

      <p className="hover:text-[rgb(217,86,39)] cursor-pointer mb-[5px]">
        Get Free Shipping on eligible orders shipped by Amazon
      </p>

      <h4 className="my-0.5 mb-3">Deals & Discounts</h4>
      {deals.map((deal) => (
        <p key={deal} className="mb-[5px] hover:text-[rgb(217,86,39)] cursor-pointer">
          {deal}
        </p>
      ))}

      <h4 className="my-0.5 mb-3">Customer Reviews</h4>
      <div className="flex flex-row">
        <img className="w-[100px]" src="/images/4 stars.png" alt="" />
        <h5 className="font-light flex items-center">&up</h5>
      </div>
    </div>
  )
}
