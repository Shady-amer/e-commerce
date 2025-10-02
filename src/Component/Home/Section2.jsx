import React ,{useState}from 'react'

const Section2 = () => {



  const [activeFilter, setActiveFilter] = useState('all');
  
  const items = [
    {
      id: 1,
      name: 'Cappuccino',
      price: 48,
      category: 'breakfast',
      description: 'Usage of the Internet is becoming more common due to rapid advances.'
    },
    {
      id: 2,
      name: 'Americano',
      price: 49,
      category: 'lunch',
      description: 'Usage of the Internet is becoming more common due to rapid advances.'
    },
    {
      id: 3,
      name: 'Macchiato',
      price: 45,
      category: 'dinner',
      description: 'Usage of the Internet is becoming more common due to rapid advances.'
    },
    {
      id: 4,
      name: 'Piccolo Latte',
      price: 46,
      category: 'budget',
      description: 'Usage of the Internet is becoming more common due to rapid advances.'
    },
    {
      id: 5,
      name: 'Mocha',
      price: 46,
      category: 'healthy',
      description: 'Usage of the Internet is becoming more common due to rapid advances.'
    },
    {
      id: 6,
      name: 'Ristretto',
      price: 46,
      category: 'breakfast',
      description: 'Usage of the Internet is becoming more common due to rapid advances.'
    }
  ];

  const filterButtons = [
    { key: 'all', label: 'All' },
    { key: 'breakfast', label: 'Breakfast' },
    { key: 'lunch', label: 'Lunch' },
    { key: 'dinner', label: 'Dinner' },
    { key: 'budget', label: 'Budget' },
    { key: 'healthy', label: 'Healthy' }
  ];

  const handleFilter = (category) => {
    setActiveFilter(category);
  };

  const filteredItems = activeFilter === 'all' 
    ? items 
    : items.filter(item => item.category === activeFilter);

  return (
    <section className="py-12 bg-gray-50 mt-36 ">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            What kind of Foods we serve for you
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Who can in extremely low with eco-friendly systems.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filterButtons.map((button) => (
            <button
              key={button.key}
              onClick={() => handleFilter(button.key)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeFilter === button.key
                  ? 'bg-red-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              {button.label}
            </button>
          ))}
        </div>

      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                <span className="text-red-600 font-bold text-lg">${item.price}</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-700 font-medium">Showing {filteredItems.length} items</p>
        </div>
      </div>
    </section>
  );
};



export default Section2
