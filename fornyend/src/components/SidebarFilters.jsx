import { normalizeTag } from '@/utils/filterProducts'

const filterSections = [
  {
    title: 'Conditions',
    items: [
      { label: 'Used', tag: 'used' },
      { label: 'New', tag: 'new' },
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

const checkboxClass =
  'h-5 w-5 cursor-pointer appearance-none rounded border-2 border-[#ccc] outline-none checked:border-[rgb(217,86,39)] checked:bg-[rgb(217,86,39)]'

function isFilterActive(activeFilters, tag) {
  return [...activeFilters].some((f) => normalizeTag(f) === normalizeTag(tag))
}

export default function SidebarFilters({ activeFilters, onToggleFilter, onClearFilters }) {
  const handleChange = (tag, checked) => {
    onToggleFilter(tag, checked)
  }

  return (
    <aside className="hidden w-full shrink-0 flex-col px-4 lg:flex lg:w-[15vw] lg:px-0">
      {activeFilters.size > 0 && (
        <button
          type="button"
          className="mb-3 text-left text-sm text-[rgb(67,67,208)] hover:underline"
          onClick={onClearFilters}
        >
          Clear all filters
        </button>
      )}

      <h4 className="my-0.5 mb-3">Popular Shopping Ideas</h4>
      {shoppingIdeas.map((idea) => (
        <p key={idea} className="mb-[5px] cursor-pointer hover:text-[rgb(217,86,39)]">
          {idea}
        </p>
      ))}

      <hr className="mb-[5px] mt-2.5 w-full text-[rgb(116,114,114)]" />

      <h4 className="mb-2.5">Eligible for Free Shipping</h4>
      <div className="mb-[3px] flex flex-row">
        <input
          type="checkbox"
          className={checkboxClass}
          checked={isFilterActive(activeFilters, 'free-dellivery')}
          onChange={(e) => handleChange('free-dellivery', e.target.checked)}
        />
        <p className="ml-[3px] mb-[5px] cursor-pointer hover:text-[rgb(217,86,39)]">
          Free Shipping by Amazon
        </p>
      </div>

      {filterSections.map((section) => (
        <div key={section.title} className="mb-2.5 leading-[25px]">
          <h4>{section.title}</h4>
          {section.items.map((item) => (
            <div key={`${section.title}-${item.label}`} className="flex flex-row hover:text-[rgb(217,86,39)]">
              <input
                type="checkbox"
                className={checkboxClass}
                checked={isFilterActive(activeFilters, item.tag)}
                onChange={(e) => handleChange(item.tag, e.target.checked)}
              />
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      ))}

      <p className="mb-[5px] cursor-pointer hover:text-[rgb(217,86,39)]">
        Get Free Shipping on eligible orders shipped by Amazon
      </p>

      <h4 className="my-0.5 mb-3">Deals & Discounts</h4>
      {deals.map((deal) => (
        <p key={deal} className="mb-[5px] cursor-pointer hover:text-[rgb(217,86,39)]">
          {deal}
        </p>
      ))}

      <h4 className="my-0.5 mb-3">Customer Reviews</h4>
      <div className="flex flex-row">
        <img className="w-[100px]" src="/images/4 stars.png" alt="" />
        <h5 className="flex items-center font-light">&up</h5>
      </div>
    </aside>
  )
}
