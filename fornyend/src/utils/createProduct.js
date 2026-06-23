let nextId = 100

export function createProductFromForm({ title, price, imageUrl, rating }) {
  nextId += 1
  return {
    id: nextId,
    name: title,
    image: imageUrl,
    imageClass: 'my-auto w-full max-w-[200px] md:max-w-[17vw] mx-auto md:mx-2.5 object-contain',
    rating: Number(rating) || 4,
    reviewCount: 0,
    currency: 'PKR',
    price: String(price),
    listPrice: `PKR${(Number(price) * 1.07).toFixed(2)}`,
    blocks: [
      { type: 'text', value: 'New on Amazon in past month' },
      { type: 'text', value: 'Free delivery Tue, Mar 10' },
      { type: 'text', value: 'Ships to Pakistan' },
      { type: 'button' },
    ],
    tags: ['new', 'pc', 'amazon'],
  }
}
