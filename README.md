# TechMart - Premium Electronics Store

A modern, full-stack e-commerce platform built with Next.js, Clerk authentication, and Tailwind CSS. TechMart offers a premium shopping experience for electronics and tech accessories.

## 🚀 Features

- **Modern UI/UX**: Clean, responsive design with Tailwind CSS
- **User Authentication**: Secure authentication with Clerk
- **Product Management**: Browse and manage electronics products
- **Shopping Cart**: Add, remove, and manage cart items
- **Order Management**: Track orders and view order history
- **Seller Dashboard**: Dedicated seller interface for product management
- **Responsive Design**: Mobile-first approach for all devices

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19
- **Styling**: Tailwind CSS
- **Authentication**: Clerk
- **Deployment**: Vercel
- **Package Manager**: npm

## 📱 Product Categories

- **Smartphones**: Latest mobile devices and accessories
- **Laptops**: Premium laptops for work and gaming
- **Audio**: Headphones, earbuds, and sound systems
- **Gaming**: Consoles, controllers, and gaming accessories
- **Cameras**: Professional photography equipment
- **Wearables**: Smartwatches and fitness trackers
- **Home Entertainment**: Projectors and media devices

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Clerk account for authentication

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/techmart-ecommerce.git
cd techmart-ecommerce
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
```

4. Run the development server
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
techmart-ecommerce/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── cart/              # Shopping cart page
│   ├── my-orders/         # Order history page
│   ├── product/           # Product detail pages
│   ├── seller/            # Seller dashboard
│   └── layout.js          # Root layout
├── components/            # Reusable components
│   ├── seller/           # Seller-specific components
│   └── ...               # Other components
├── context/              # React context providers
├── assets/               # Images and static assets
└── lib/                  # Utility functions
```

## 🎨 Key Components

- **Navbar**: Navigation with user authentication and cart
- **Banner**: Hero section with featured products
- **ProductCard**: Individual product display
- **Cart**: Shopping cart functionality
- **OrderSummary**: Order details and checkout
- **Seller Dashboard**: Product management interface

## 🔐 Authentication

TechMart uses Clerk for secure user authentication:
- Sign up/Sign in functionality
- User profile management
- Protected routes
- Role-based access (Customer/Seller)

## 🛒 Shopping Features

- **Product Browsing**: View all products with filtering
- **Product Details**: Detailed product information and images
- **Shopping Cart**: Add/remove items, quantity management
- **Order Placement**: Complete checkout process
- **Order Tracking**: View order status and history

## 🎯 Seller Features

- **Product Management**: Add, edit, and delete products
- **Order Management**: View and process customer orders
- **Dashboard**: Analytics and sales overview

## 🚀 Deployment

### Vercel Deployment

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Environment Variables for Production

Make sure to set these in your Vercel dashboard:
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- `CLERK_SECRET_KEY`
- `NEXT_PUBLIC_CLERK_SIGN_IN_URL`
- `NEXT_PUBLIC_CLERK_SIGN_UP_URL`
- `NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL`
- `NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **TechMart Team** - Premium electronics store development

## 📞 Support

For support, email support@techmart.com or create an issue in this repository.

---

Built with ❤️ by the TechMart Team

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.