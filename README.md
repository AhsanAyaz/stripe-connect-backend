This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Flutter Stripe Backend

Code for the Flutter Stripe Backend project used in the tutorial "Flutter Marketplace app with Stripe Connect".

## Blog Posts / Articles:

- [Flutter Marketplace app with Stripe Connect - Part 1](https://ahsanayaz.com/flutter-marketplace-app-with-stripe-connect-part-1/)
- [Flutter Marketplace app with Stripe Connect - Part 2](https://ahsanayaz.com/flutter-marketplace-app-with-stripe-connect-part-2/)

## Video Tutorials:

- [Flutter Marketplace app with Stripe Connect - Part 1 - Configuring Stripe & Seller Onboarding](https://www.youtube.com/watch?v=R2Okg53lUv8)
- [Flutter Marketplace app with Stripe Connect - Part 2 - Deeplinking & paying for productss](https://youtu.be/wj5ieFnm0e4)

## Getting Started

### Set Environment Variables

The repository has an `.env.example` file that shows the necessary variables for the tutorial. Create a new file in the project named `.env.local` and fill the values accordingly based on your business requirements. Here is an example configuration:

```
STRIPE_API_SECRET=sk_test_asdkjqwklejqwklejkasljdkljasdklj
NEXT_PUBLIC_STRIPE_API_PUBLIC=pk_test_asldksalaksdjjkasdhjaksdhjkhasd
NEXT_PUBLIC_APP_SCHEME=pandagums
NEXT_PUBLIC_HOST=http://localhost:3000
STRIPE_APP_FEE=1.23
```

The `NEXT_PUBLIC_APP_SCHEME` is used for deeplinks, the `NEXT_PUBLIC_HOST` is used within the React View pages for API calls (not for flutter, but for the Web Tutorial), and the `STRIPE_APP_FEE` is what is deducted as a fee for your brand on each transaction.

Once the configuration is done, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/\*](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Like my work?

<a
  title="Like Ahsan's work? Buy him a coffee"
  class="bmac"
  href="https://www.buymeacoffee.com/muhd.ahsanayaz">
<img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=muhd.ahsanayaz&button_colour=BD5FFF&font_colour=ffffff&font_family=Comic&outline_colour=000000&coffee_colour=FFDD00" />
</a>

Or follow & connect with me on my Socials:

[![GitHub Profile](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://www.github.com/ahsanayaz)
[![LinkedIn Profile](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://www.linkedin.com/in/ahsanayaz)
[![Twitter Profile](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://twitter.com/muhd_ahsanayaz)
[![Instagram Profile](https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white)](https://instagram.com/muhd.ahsanayaz)
[![Facebook Profile](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://facebook.com/muhd.ahsanayaz)
[![TikTok Profile](https://img.shields.io/badge/TikTok-000000?style=for-the-badge&logo=tiktok&logoColor=white)](https://www.tiktok.com/@muhd.ahsanayaz)
[![CodeZen Discord](https://img.shields.io/discord/814191682282717194.svg?label=CodeZen&logo=Discord&colorB=7289da&style=for-the-badge)](https://discord.gg/rEBSSh926k)
