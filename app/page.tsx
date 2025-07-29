"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  MessageCircle,
  ShoppingBag,
  Facebook,
  Instagram,
  Globe,
  Leaf,
  Award,
  Truck,
  Shield,
  Mail,
  ExternalLink,
} from "lucide-react"
import Image from "next/image"
import { InstagramEmbed } from "@/components/instagram-embed"

export default function BaantansodWebsite() {
  const [language, setLanguage] = useState<"th" | "en">("th")

  const content = {
    th: {
      nav: {
        home: "หน้าแรก",
        products: "สินค้า",
        about: "เกี่ยวกับเรา",
        contact: "ติดต่อ",
        news: "ข่าวสาร",
      },
      hero: {
        title: "น้ำตาลโตนดสด",
        subtitle: "จากต้นตาลโบราณแห่งสยาม",
        description: "ส่งตรงจากสวน สดใหม่ทุกวัน ไม่มีขั้นต่ำ",
        detail: "น้ำตาลโตนดแท้ 100% จากต้นตาลโบราณ กรรมวิธีดั้งเดิม รสชาติหอมหวานธรรมชาติ",
        cta: "สั่งซื้อเลย",
        phone: "โทรเลย",
        guarantee: "รับประกันคุณภาพ 100%",
        delivery: "จัดส่งฟรีทั่วประเทศ",
        support: "บริการลูกค้า 24/7",
      },
      features: {
        title: "ทำไมต้องเลือกบ้านตาลสด",
        subtitle: "คุณภาพที่เหนือกว่า ด้วยมาตรฐานระดับพรีเมียม",
        fresh: {
          title: "สดใหม่ทุกวัน",
          desc: "เก็บจากต้นตาลทุกเช้า ส่งถึงมือคุณในวันเดียวกัน",
        },
        natural: {
          title: "100% ธรรมชาติ",
          desc: "ไม่มีสารเคมี ไม่มีสีผสม กรรมวิธีแบบดั้งเดิม",
        },
        quality: {
          title: "คุณภาพพรีเมียม",
          desc: "คัดสรรเฉพาะน้ำตาลเกรดเอ รสชาติหอมหวานเข้มข้น",
        },
        delivery: {
          title: "จัดส่งทั่วไทย",
          desc: "บริการจัดส่งรวดเร็ว ปลอดภัย ไม่มีขั้นต่ำ",
        },
      },
      products: {
        title: "สินค้าของเรา",
        subtitle: "น้ำตาลโตนดคุณภาพพรีเมียม จากต้นตาลโบราณแห่งสยาม",
        baby_sugar: "ตาลอ่อนปอกเปลือก",
        fresh_daily: "สดใหม่ทุกวัน",
        no_minimum: "ไม่มีขั้นต่ำ",
        premium_quality: "คุณภาพพรีเมียม",
        limited: "จำนวนจำกัด",
        ready_to_eat: "พร้อมทำ พร้อมทาน",
      },
      about: {
        title: "เกี่ยวกับบ้านตาลสด",
        subtitle: "มรดกแห่งรสชาติ สืบสานประเพณีไทย",
        description:
          "เราคือผู้ผลิตน้ำตาลโตนดแท้จากต้นตาลโบราณ ด้วยกรรมวิธีที่สืบทอดมาจากบรรพบุรุษ เพื่อนำเสนอน้ำตาลโตนดคุณภาพสูงสุดให้กับลูกค้า",
        commitment: "เราให้ความสำคัญกับคุณภาพและความสดใหม่ โดยเก็บน้ำตาลจากต้นตาลทุกเช้าและส่งถึงมือลูกค้าในวันเดียวกัน",
        heritage: "มรดกแห่งรสชาติที่สืบทอดมากว่า 3 ชั่วอายุคน",
      },
      contact: {
        title: "ติดต่อสั่งซื้อ",
        subtitle: "พร้อมให้บริการคุณตลอด 24 ชั่วโมง",
        phone: "โทรศัพท์",
        line: "Line Official",
        shopee: "Shopee Store",
        social: "ติดตามเราได้ที่",
      },
      cta: {
        order_now: "สั่งซื้อตอนนี้",
        call_now: "โทรเลย",
        line_order: "สั่งผ่าน Line",
        shopee_order: "สั่งผ่าน Shopee",
      },
    },
    en: {
      nav: {
        home: "Home",
        products: "Products",
        about: "About",
        contact: "Contact",
        news: "News",
      },
      hero: {
        title: "Fresh Toddy Palm Sugar",
        subtitle: "From Ancient Siamese Palm Trees",
        description: "Direct from farm, fresh daily, no minimum order",
        detail:
          "100% authentic toddy palm sugar from ancient palm trees, traditional process, naturally sweet and aromatic",
        cta: "Order Now",
        phone: "Call Now",
        guarantee: "100% Quality Guarantee",
        delivery: "Free Nationwide Delivery",
        support: "24/7 Customer Support",
      },
      features: {
        title: "Why Choose Baan Tan Sod",
        subtitle: "Superior quality with premium standards",
        fresh: {
          title: "Fresh Daily",
          desc: "Harvested from palm trees every morning, delivered to you the same day",
        },
        natural: {
          title: "100% Natural",
          desc: "No chemicals, no artificial colors, traditional processing method",
        },
        quality: {
          title: "Premium Quality",
          desc: "Only grade A palm sugar selected, rich sweet and aromatic taste",
        },
        delivery: {
          title: "Nationwide Delivery",
          desc: "Fast and safe delivery service throughout Thailand, no minimum order",
        },
      },
      products: {
        title: "Our Products",
        subtitle: "Premium Quality Toddy Palm Sugar from Ancient Siamese Trees",
        baby_sugar: "Fresh Baby Palm Sugar",
        fresh_daily: "Fresh Daily",
        no_minimum: "No Minimum",
        premium_quality: "Premium Quality",
        limited: "Limited Edition",
        ready_to_eat: "Ready to Cook & Eat",
      },
      about: {
        title: "About Baan Tan Sod",
        subtitle: "Heritage of Taste, Preserving Thai Tradition",
        description:
          "We are authentic toddy palm sugar producers from ancient palm trees, using traditional methods passed down from our ancestors to offer the highest quality palm sugar to our customers.",
        commitment:
          "We prioritize quality and freshness by harvesting palm sugar from trees every morning and delivering to customers the same day.",
        heritage: "A heritage of taste passed down for over 3 generations",
      },
      contact: {
        title: "Contact & Order",
        subtitle: "Ready to serve you 24/7",
        phone: "Phone",
        line: "Line Official",
        shopee: "Shopee Store",
        social: "Follow Us",
      },
      cta: {
        order_now: "Order Now",
        call_now: "Call Now",
        line_order: "Order via Line",
        shopee_order: "Order via Shopee",
      },
    },
  }

  const t = content[language]

  // Updated Instagram post URLs with your new links
  const instagramPosts = [
    {
      id: 1,
      url: "https://www.instagram.com/p/DJ-uKivvl7R/",
      title: language === "th" ? "น้ำตาลโตนดสดใหม่" : "Fresh Palm Sugar",
      description: language === "th" ? "น้ำตาลโตนดแท้ 100%" : "100% Authentic Palm Sugar",
    },
    {
      id: 2,
      url: "https://www.instagram.com/p/DJODh0OxML1/",
      title: language === "th" ? "กรรมวิธีการทำน้ำตาลโตนด" : "Palm Sugar Making Process",
      description: language === "th" ? "วิดีโอกรรมวิธีดั้งเดิม" : "Traditional Process Video",
    },
    {
      id: 3,
      url: "https://www.instagram.com/p/DHAaZnCPDL2/",
      title: language === "th" ? "น้ำตาลโตนดลูกใส" : "Crystal Palm Sugar",
      description: language === "th" ? "คุณภาพพรีเมียม" : "Premium Quality",
    },
    {
      id: 4,
      url: "https://www.instagram.com/p/DBaoq_LvyCj/?img_index=1",
      title: language === "th" ? "น้ำตาลโตนดในกระทะ" : "Palm Sugar in Traditional Pan",
      description: language === "th" ? "กรรมวิธีดั้งเดิม" : "Traditional Cooking Method",
    },
    {
      id: 5,
      url: "https://www.instagram.com/p/C5ASlifr8IA/?img_index=1",
      title: language === "th" ? "น้ำตาลโตนดก้อน" : "Palm Sugar Blocks",
      description: language === "th" ? "รูปแบบดั้งเดิม" : "Traditional Form",
    },
    {
      id: 6,
      url: "https://www.instagram.com/p/C6Lhh9lLLE6/",
      title: language === "th" ? "น้ำตาลโตนดพิเศษ" : "Special Palm Sugar",
      description: language === "th" ? "คุณภาพเยี่ยม" : "Excellent Quality",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 border-b border-green-100 py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-green-700">
              <Phone className="h-4 w-4" />
              <span className="font-medium">095-441-5559</span>
            </div>
            <div className="flex items-center space-x-2 text-green-700">
              <Mail className="h-4 w-4" />
              <span className="font-medium">baantansod@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://www.facebook.com/people/%E0%B8%95%E0%B8%B2%E0%B8%A5%E0%B9%82%E0%B8%95%E0%B8%99%E0%B8%94%E0%B8%82%E0%B8%B2%E0%B8%A2%E0%B8%AA%E0%B9%88%E0%B8%87-%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%95%E0%B8%B2%E0%B8%A5%E0%B8%AA%E0%B8%94/100063789030854/"
              className="text-blue-600 hover:text-blue-700 transition-colors transform hover:scale-110"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="https://www.instagram.com/baantansod/"
              className="text-pink-600 hover:text-pink-700 transition-colors transform hover:scale-110"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              <Image
                src="/logo.png"
                alt="Baan Tan Sod Logo"
                width={60}
                height={60}
                className="rounded-lg shadow-md object-contain"
              />
              <div>
                <span className="text-2xl font-bold text-gray-800">บ้านตาลสด</span>
                <div className="text-sm text-gray-600 font-medium">Baan Tan Sod</div>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {Object.values(t.nav).map((item, index) => (
                <a
                  key={index}
                  href={`#${Object.keys(t.nav)[index]}`}
                  className="text-gray-700 hover:text-green-600 font-medium text-lg transition-all duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-600 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-3">
              <Button
                variant={language === "th" ? "default" : "outline"}
                size="sm"
                onClick={() => setLanguage("th")}
                className={`text-sm transition-all duration-300 ${
                  language === "th"
                    ? "bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg"
                    : "border-green-600 text-green-600 hover:bg-green-50"
                }`}
              >
                ไทย
              </Button>
              <Button
                variant={language === "en" ? "default" : "outline"}
                size="sm"
                onClick={() => setLanguage("en")}
                className={`text-sm transition-all duration-300 ${
                  language === "en"
                    ? "bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg"
                    : "border-green-600 text-green-600 hover:bg-green-50"
                }`}
              >
                EN
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Simplified Hero Section with Palm Farm Background */}
      <section id="home" className="relative min-h-screen overflow-hidden flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/palm-farm.jpg"
            alt="Palm Tree Farm"
            fill
            className="object-cover"
            style={{ filter: "brightness(0.7)" }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"></div>
        </div>

        {/* Centered Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          {/* Logo and Brand Name */}
          <div className="flex flex-col items-center space-y-6 mb-8">
            <Image
              src="/logo.png"
              alt="Baan Tan Sod Logo"
              width={120}
              height={120}
              className="rounded-2xl shadow-2xl object-contain bg-white/10 backdrop-blur-sm p-3"
            />
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-2xl mb-2">
                {language === "th" ? "บ้านตาลสด" : "Baan Tan Sod"}
              </h1>
              <p className="text-2xl md:text-3xl text-yellow-200 font-semibold drop-shadow-xl">
                {language === "th"
                  ? "น้ำตาลโตนดสด จากต้นตาลโบราณแห่งสยาม"
                  : "Fresh Toddy Palm Sugar from Ancient Siamese Trees"}
              </p>
            </div>
          </div>

          {/* Simple Tagline */}
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-white font-medium leading-relaxed drop-shadow-xl bg-black/20 backdrop-blur-sm rounded-2xl px-8 py-4 border border-white/20">
              {language === "th" ? "ส่งตรงจากสวน สดใหม่ทุกวัน ไม่มีขั้นต่ำ" : "Direct from farm, fresh daily, no minimum order"}
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">{t.features.title}</h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">{t.features.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Leaf,
                data: t.features.fresh,
                color: "bg-green-500",
                bgColor: "bg-gradient-to-br from-green-50 to-green-100",
                borderColor: "border-green-200",
                shadowColor: "hover:shadow-green-500/20",
              },
              {
                icon: Shield,
                data: t.features.natural,
                color: "bg-blue-500",
                bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
                borderColor: "border-blue-200",
                shadowColor: "hover:shadow-blue-500/20",
              },
              {
                icon: Award,
                data: t.features.quality,
                color: "bg-orange-500",
                bgColor: "bg-gradient-to-br from-orange-50 to-orange-100",
                borderColor: "border-orange-200",
                shadowColor: "hover:shadow-orange-500/20",
              },
              {
                icon: Truck,
                data: t.features.delivery,
                color: "bg-purple-500",
                bgColor: "bg-gradient-to-br from-purple-50 to-purple-100",
                borderColor: "border-purple-200",
                shadowColor: "hover:shadow-purple-500/20",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className={`text-center p-8 hover:shadow-2xl transition-all duration-500 bg-white ${feature.borderColor} border-2 hover:scale-105 ${feature.shadowColor} group`}
              >
                <CardContent className="pt-6">
                  <div
                    className={`w-20 h-20 ${feature.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon
                      className={`h-10 w-10 ${feature.color.replace("bg-", "text-")} group-hover:animate-pulse`}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.data.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.data.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section with Real Instagram Embeds */}
      <section id="products" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">{t.products.title}</h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">{t.products.subtitle}</p>
            <div className="flex items-center justify-center mt-6 space-x-3">
              <Instagram className="h-6 w-6 text-pink-600" />
              <span className="text-lg text-gray-600 font-medium">
                {language === "th" ? "ดูผลิตภัณฑ์จริงใน Instagram" : "See our real products on Instagram"}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {instagramPosts.map((post) => (
              <Card
                key={post.id}
                className="overflow-hidden hover:shadow-2xl transition-all duration-500 bg-white border-2 border-gray-200 hover:border-pink-300 group"
              >
                <CardContent className="p-0">
                  {/* Instagram Embed */}
                  <div className="relative">
                    <InstagramEmbed url={post.url} className="w-full" />
                  </div>

                  {/* Product Info */}
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{post.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{post.description}</p>

                    <div className="flex flex-wrap gap-3 mb-6">
                      <Badge
                        variant="outline"
                        className="text-green-600 border-green-600 text-sm px-3 py-1 font-medium"
                      >
                        {t.products.premium_quality}
                      </Badge>
                      <Badge variant="outline" className="text-blue-600 border-blue-600 text-sm px-3 py-1 font-medium">
                        {t.products.fresh_daily}
                      </Badge>
                    </div>

                    <div className="flex space-x-3">
                      <Button
                        className="flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold transition-all duration-300 transform hover:scale-105"
                        onClick={() => window.open(post.url, "_blank")}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        {language === "th" ? "ดูโพสต์" : "View Post"}
                      </Button>
                      <Button
                        variant="outline"
                        className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white bg-transparent transition-all duration-300 transform hover:scale-105"
                      >
                        <ShoppingBag className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Enhanced Instagram CTA Section */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-pink-50 via-orange-50 to-pink-50 rounded-3xl p-12 border-2 border-pink-200 shadow-2xl">
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-600 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                  <Instagram className="h-10 w-10 text-white" />
                </div>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                {language === "th" ? "ติดตามเราใน Instagram" : "Follow us on Instagram"}
              </h3>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                {language === "th"
                  ? "ดูภาพและวิดีโอผลิตภัณฑ์จริงของเรา พร้อมอัพเดทข่าวสารใหม่ๆ ทุกวัน"
                  : "See real photos and videos of our products, plus daily updates and news"}
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-600 to-orange-600 hover:from-pink-700 hover:to-orange-700 text-white px-12 py-6 text-xl font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-pink-500/25"
                onClick={() => window.open("https://www.instagram.com/baantansod/", "_blank")}
              >
                <Instagram className="mr-3 h-6 w-6" />
                @baantansod
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">{t.about.title}</h2>
                <p className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 font-semibold">
                  {t.about.subtitle}
                </p>
              </div>
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">{t.about.description}</p>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">{t.about.commitment}</p>
                <p className="text-xl md:text-2xl text-green-600 italic font-bold">{t.about.heritage}</p>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl border-2 border-green-200 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">100%</div>
                  <div className="text-sm md:text-base text-green-600 font-semibold">
                    {language === "th" ? "ธรรมชาติ" : "Natural"}
                  </div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border-2 border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">24h</div>
                  <div className="text-sm md:text-base text-blue-600 font-semibold">
                    {language === "th" ? "สดใหม่" : "Fresh"}
                  </div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl border-2 border-orange-200 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">3+</div>
                  <div className="text-sm md:text-base text-orange-600 font-semibold">
                    {language === "th" ? "ชั่วอายุคน" : "Generations"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-green-50 via-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">{t.contact.title}</h2>
            <p className="text-xl md:text-2xl text-gray-600">{t.contact.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-white hover:shadow-2xl transition-all duration-500 border-2 border-gray-200 hover:border-green-300 group">
              <CardContent className="p-10 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{t.contact.phone}</h3>
                <p className="text-lg mb-6 text-gray-600 font-medium">095-441-5559</p>
                <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-3 transition-all duration-300 transform hover:scale-105">
                  {t.cta.call_now}
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-2xl transition-all duration-500 border-2 border-gray-200 hover:border-green-300 group">
              <CardContent className="p-10 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{t.contact.line}</h3>
                <p className="text-lg mb-6 text-gray-600 font-medium">@baantansod</p>
                <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3 transition-all duration-300 transform hover:scale-105">
                  {t.cta.line_order}
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-2xl transition-all duration-500 border-2 border-gray-200 hover:border-orange-300 group">
              <CardContent className="p-10 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <ShoppingBag className="h-10 w-10 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{t.contact.shopee}</h3>
                <p className="text-lg mb-6 text-gray-600 font-medium">baantansod59</p>
                <Button className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-bold py-3 transition-all duration-300 transform hover:scale-105">
                  {t.cta.shopee_order}
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800">{t.contact.social}</h3>
            <div className="flex justify-center space-x-8">
              {[
                {
                  icon: Facebook,
                  href: "https://www.facebook.com/people/%E0%B8%95%E0%B8%B2%E0%B8%A5%E0%B9%82%E0%B8%95%E0%B8%99%E0%B8%94%E0%B8%82%E0%B8%B2%E0%B8%A2%E0%B8%AA%E0%B9%88%E0%B8%87-%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%95%E0%B8%B2%E0%B8%A5%E0%B8%AA%E0%B8%94/100063789030854/",
                  color: "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800",
                },
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/baantansod/",
                  color: "bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800",
                },
                {
                  icon: Globe,
                  href: "https://www.tiktok.com/@baantansod",
                  color: "bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-16 h-16 ${social.color} rounded-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-xl hover:shadow-2xl`}
                >
                  <social.icon className="h-8 w-8 text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 border-t border-gray-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-4 mb-6">
                <Image
                  src="/logo.png"
                  alt="Baan Tan Sod Logo"
                  width={50}
                  height={50}
                  className="rounded-lg shadow-lg object-contain"
                />
                <span className="text-2xl font-bold text-white">บ้านตาลสด</span>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                {language === "th"
                  ? "น้ำตาลโตนดสดใหม่ จากต้นตาลโบราณแห่งสยาม ส่งตรงถึงบ้านคุณ"
                  : "Fresh toddy palm sugar from ancient Siamese trees, delivered to your home"}
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-bold text-white mb-6">{language === "th" ? "ติดต่อเรา" : "Contact Us"}</h4>
              <div className="space-y-4 text-gray-300">
                <p className="flex items-center justify-center space-x-3 text-lg">
                  <Phone className="h-5 w-5" />
                  <span>095-441-5559</span>
                </p>
                <p className="flex items-center justify-center space-x-3 text-lg">
                  <MessageCircle className="h-5 w-5" />
                  <span>@baantansod</span>
                </p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <h4 className="text-xl font-bold text-white mb-6">
                {language === "th" ? "ช่องทางการสั่งซื้อ" : "Order Channels"}
              </h4>
              <div className="space-y-3 text-gray-300 text-lg">
                <p>Line Official: @baantansod</p>
                <p>Shopee: baantansod59</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400 text-lg">© 2024 Baan Tan Sod. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
