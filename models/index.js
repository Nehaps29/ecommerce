// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category

/*// Define a Driver as having one License to create a foreign key in the `license` table
Driver.hasOne(License, {
  foreignKey: 'driver_id',
  // When we delete a Driver, make sure to also delete the associated License.
  onDelete: 'CASCADE',
});

// We can also define the association starting with License
License.belongsTo(Driver, {
  foreignKey: 'driver_id',
}); */
Product.belongsTo(Category,{
  foreignKey: 'category_id',
 
});
// Categories have many Products
Category.hasMany(Product,{
  foreignKey: 'category_id',
  
});

// Products belongToMany Tags (through ProductTag)

Product.belongsToMany(Tag, {
  // Define the third table needed to store the foreign keys
  through: {
    model: ProductTag,
    foreignKey: 'product_id',
    unique: false
  },
  // Define an alias for when data is retrieved
  
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  // Define the third table needed to store the foreign keys
  through: {
    model: ProductTag,
    foreignKey: 'tag_id',
    unique: false
  },
  // Define an alias for when data is retrieved
  
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
