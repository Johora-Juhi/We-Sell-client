# We Sell
    This is a second-hand phone-selling website. Where one can create account as a buyer or a seller. The buyer can see the available products only if they are logged in. The seller can add new product and also see their uploaded product. Finally, a admin can see all of the buyers and sellers and also delete them.

### Live Link 

[Live Link](https://assignment-twelve-server-six.vercel.app/)


### Technologies Used Here

- Frontend - React | React-Router-Dom | React-Icons | React Tailwind | DaisyUI 
- Backend - Node | Express | MongoDB | EmailJS
- Third Party Tools - TanStack | Axiox | SweetAlert2 | EmailJS

### Key Features
- Authentication System | Dashboard Panel | Payment Gateway(Stripe) 

## Features

- Home Page- We Sell contains an animated banner in the first section. Then it has a category section for phone. For accessing this section users must give their credentials. It may be email, password system, or Google login system.  In the next section users can see the advertisement if any seller posts any advertisement. Next section shows the key features of the service we provide. In the second last section there is a subscription form where users can subscribe to We Sell and after subscription, they will get a confirmation email. Lastly in the footer section section we have provided our contact information. 

- Category Page - In the category page there are 3 types of phones, which are: 1. Apple iPhone 2. Samsung 3. Realme. On this page, the user will see some detailed information like Product Model, Resale Price, Orginal Price, Used Time, Year of Purchase, Seller Name, Seller's Number, and Seller's Location. Finally, the user can book the phone or report on that product. Using Book now button user will send their information to a database which will be confirmed with a popup.

- Role - There are 3 types of users. Which are: 1. Admin 2. User 3. Seller

- By giving the users a credential Dashboard option added in the navbar which is dynamic. Here, Admin can see 3 options which are 'All Seller', 'All Buyer', and 'Reported Items'. Secondly, the Buyer will see 'My Orders,. Finally, the seller will 2 options which are 'Add a Product' & 'My Product'.

- Admin Pannel - In the 'All Seller' option admin will see all of the user. Where it will show user's Name, Email and Roll. Here admin can verify the seller by verifying a seller every verified seller will get a blue tick sign beside their name in the phone showing page. Admin can also delete a seller using delete button which will confirmed with a confirmation popup. The 'All Buyer' option has the same functionality excluding verification option.

- Seller Pannel - From the 'Add Product' option seller can add a product for sell. So, a seller have to submit a from which contains Product Name, Product Condition (Excellent, Good, Fair), Mobile Number, Location, phone Type (Electric, Bass, Acoustic), Orginal Price, Selling Price, Year of Purchase (2000 - 2022), Image & Description. In 'My Product' option seller will see their uploaded product with Product Name, Price, Condition & Status. There is a 'Advertise' button, by clicking this, that product will show in the home page. Seller can delete their uploaded product by clicking 'Delete'button.

- Buyer Pannel - Buyer can only see the orders that they have placed.

- Blogs - In blog page their are 4 basic questions with answers. Here are the questions: 1. What are the different ways to manage a state in React application? 2. How does prototypical inheritance work? 3. What is unit test? Why should we write unit test? 4. React vs Angular vs Vue

- Authentication System - Email, Password Login and Google Login System are implemented using Firebase.