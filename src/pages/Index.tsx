import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [bookingForm, setBookingForm] = useState({
    name: '',
    phone: '',
    email: '',
    tractorModel: '',
    serviceType: '',
    message: '',
    date: ''
  });

  const tractors = [
    {
      id: 1,
      name: 'MiniTech Pro 2024',
      power: '25 л.с.',
      weight: '1200 кг',
      price: '890 000 ₽',
      features: ['GPS навигация', 'Автопилот', 'Климат-контроль'],
      image: '/placeholder.svg'
    },
    {
      id: 2,
      name: 'AgroMax Compact',
      power: '35 л.с.',
      weight: '1450 кг',
      price: '1 250 000 ₽',
      features: ['Гидравлика', 'LED освещение', 'Bluetooth'],
      image: '/placeholder.svg'
    },
    {
      id: 3,
      name: 'FarmTech Elite',
      power: '45 л.с.',
      weight: '1650 кг',
      price: '1 890 000 ₽',
      features: ['Полный привод', 'Кондиционер', 'Датчики'],
      image: '/placeholder.svg'
    }
  ];

  const services = [
    {
      title: 'Техническое обслуживание',
      description: 'Регулярное ТО для максимальной производительности',
      icon: 'Settings',
      price: 'от 15 000 ₽'
    },
    {
      title: 'Диагностика и ремонт',
      description: 'Профессиональная диагностика с современным оборудованием',
      icon: 'Wrench',
      price: 'от 8 000 ₽'
    },
    {
      title: 'Модернизация',
      description: 'Установка дополнительного оборудования',
      icon: 'Zap',
      price: 'от 25 000 ₽'
    },
    {
      title: 'Выездной сервис',
      description: 'Ремонт и обслуживание на вашем участке',
      icon: 'Truck',
      price: 'от 5 000 ₽'
    }
  ];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submitted:', bookingForm);
    alert('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm border-b border-teal-500/20 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Tractor" size={32} className="text-teal-400" />
            <span className="font-bold text-white text-2xl">Стальной краб</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-300 hover:text-teal-400 transition-colors">Главная</a>
            <a href="#catalog" className="text-gray-300 hover:text-teal-400 transition-colors">Каталог</a>
            <a href="#services" className="text-gray-300 hover:text-teal-400 transition-colors">Услуги</a>
            <a href="#contacts" className="text-gray-300 hover:text-teal-400 transition-colors">Контакты</a>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-teal-600 hover:bg-teal-700 text-white">
                Записаться на сервис
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-slate-800 border-blue-500/20">
              <DialogHeader>
                <DialogTitle className="text-white">Запись на техобслуживание</DialogTitle>
                <DialogDescription className="text-gray-400">
                  Заполните форму и мы свяжемся с вами
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-gray-300">Имя</Label>
                    <Input
                      id="name"
                      value={bookingForm.name}
                      onChange={(e) => setBookingForm({...bookingForm, name: e.target.value})}
                      className="bg-slate-700 border-gray-600 text-white"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-gray-300">Телефон</Label>
                    <Input
                      id="phone"
                      value={bookingForm.phone}
                      onChange={(e) => setBookingForm({...bookingForm, phone: e.target.value})}
                      className="bg-slate-700 border-gray-600 text-white"
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email" className="text-gray-300">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={bookingForm.email}
                    onChange={(e) => setBookingForm({...bookingForm, email: e.target.value})}
                    className="bg-slate-700 border-gray-600 text-white"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-gray-300">Модель трактора</Label>
                    <Select onValueChange={(value) => setBookingForm({...bookingForm, tractorModel: value})}>
                      <SelectTrigger className="bg-slate-700 border-gray-600 text-white">
                        <SelectValue placeholder="Выберите модель" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-700 border-gray-600">
                        {tractors.map(tractor => (
                          <SelectItem key={tractor.id} value={tractor.name} className="text-white">
                            {tractor.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="text-gray-300">Тип услуги</Label>
                    <Select onValueChange={(value) => setBookingForm({...bookingForm, serviceType: value})}>
                      <SelectTrigger className="bg-slate-700 border-gray-600 text-white">
                        <SelectValue placeholder="Выберите услугу" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-700 border-gray-600">
                        {services.map((service, index) => (
                          <SelectItem key={index} value={service.title} className="text-white">
                            {service.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="message" className="text-gray-300">Дополнительная информация</Label>
                  <Textarea
                    id="message"
                    value={bookingForm.message}
                    onChange={(e) => setBookingForm({...bookingForm, message: e.target.value})}
                    className="bg-slate-700 border-gray-600 text-white"
                    rows={3}
                  />
                </div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  Отправить заявку
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
              Мини-тракторы
              <span className="text-teal-400 block">будущего</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in">
              Высокотехнологичная сельскохозяйственная техника с умными системами управления
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 text-lg animate-scale-in">
                <Icon name="Zap" size={20} className="mr-2" />
                Смотреть каталог
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 text-lg animate-scale-in">
                    <Icon name="Calendar" size={20} className="mr-2" />
                    Записаться на сервис
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-slate-800 border-blue-500/20">
                  <DialogHeader>
                    <DialogTitle className="text-white">Запись на техобслуживание</DialogTitle>
                    <DialogDescription className="text-gray-400">
                      Заполните форму и мы свяжемся с вами
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleBookingSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-gray-300">Имя</Label>
                        <Input
                          id="name"
                          value={bookingForm.name}
                          onChange={(e) => setBookingForm({...bookingForm, name: e.target.value})}
                          className="bg-slate-700 border-gray-600 text-white"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-gray-300">Телефон</Label>
                        <Input
                          id="phone"
                          value={bookingForm.phone}
                          onChange={(e) => setBookingForm({...bookingForm, phone: e.target.value})}
                          className="bg-slate-700 border-gray-600 text-white"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-gray-300">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={bookingForm.email}
                        onChange={(e) => setBookingForm({...bookingForm, email: e.target.value})}
                        className="bg-slate-700 border-gray-600 text-white"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label className="text-gray-300">Модель трактора</Label>
                        <Select onValueChange={(value) => setBookingForm({...bookingForm, tractorModel: value})}>
                          <SelectTrigger className="bg-slate-700 border-gray-600 text-white">
                            <SelectValue placeholder="Выберите модель" />
                          </SelectTrigger>
                          <SelectContent className="bg-slate-700 border-gray-600">
                            {tractors.map(tractor => (
                              <SelectItem key={tractor.id} value={tractor.name} className="text-white">
                                {tractor.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label className="text-gray-300">Тип услуги</Label>
                        <Select onValueChange={(value) => setBookingForm({...bookingForm, serviceType: value})}>
                          <SelectTrigger className="bg-slate-700 border-gray-600 text-white">
                            <SelectValue placeholder="Выберите услугу" />
                          </SelectTrigger>
                          <SelectContent className="bg-slate-700 border-gray-600">
                            {services.map((service, index) => (
                              <SelectItem key={index} value={service.title} className="text-white">
                                {service.title}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-gray-300">Дополнительная информация</Label>
                      <Textarea
                        id="message"
                        value={bookingForm.message}
                        onChange={(e) => setBookingForm({...bookingForm, message: e.target.value})}
                        className="bg-slate-700 border-gray-600 text-white"
                        rows={3}
                      />
                    </div>
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                      Отправить заявку
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-slate-700/50 border-blue-500/20 hover-scale">
              <CardHeader>
                <Icon name="Cpu" size={48} className="text-blue-400 mb-4" />
                <CardTitle className="text-white">Умные системы</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">ИИ-навигация, автопилот и система мониторинга параметров в реальном времени</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-700/50 border-blue-500/20 hover-scale">
              <CardHeader>
                <Icon name="Zap" size={48} className="text-orange-400 mb-4" />
                <CardTitle className="text-white">Высокая мощность</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">Двигатели от 25 до 45 л.с. с оптимальным расходом топлива</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-700/50 border-blue-500/20 hover-scale">
              <CardHeader>
                <Icon name="Shield" size={48} className="text-green-400 mb-4" />
                <CardTitle className="text-white">Надежность</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">Гарантия 3 года, сервисное обслуживание по всей России</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Каталог техники</h2>
            <p className="text-xl text-gray-300">Выберите идеальный трактор для ваших задач</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tractors.map((tractor) => (
              <Card key={tractor.id} className="bg-slate-700/50 border-blue-500/20 hover-scale overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center overflow-hidden">
                  <img 
                    src={tractor.id === 1 ? "/img/f3b25db3-d73a-45a0-8e65-21d4d3f83ed3.jpg" : 
                         tractor.id === 2 ? "/img/8e020aa2-a11a-43b8-8ba9-0c2b80142777.jpg" : 
                         "/img/cf694c1d-151f-4a0f-959f-5fbd040f1381.jpg"}
                    alt={tractor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-white text-xl">{tractor.name}</CardTitle>
                  <CardDescription className="text-gray-400">
                    Мощность: {tractor.power} • Вес: {tractor.weight}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {tractor.features.map((feature, index) => (
                        <Badge key={index} variant="secondary" className="bg-blue-600/20 text-blue-400 border-blue-500/30">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-blue-400">{tractor.price}</span>
                      <Button className="bg-blue-600 hover:bg-blue-700">
                        Подробнее
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-slate-800/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Сервисные услуги</h2>
            <p className="text-xl text-gray-300">Профессиональное обслуживание вашей техники</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="bg-slate-700/50 border-blue-500/20 hover-scale text-center">
                <CardHeader>
                  <Icon name={service.icon as any} size={48} className="text-blue-400 mx-auto mb-4" />
                  <CardTitle className="text-white text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                  <div className="text-blue-400 font-semibold mb-4">{service.price}</div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700 w-full">
                        Записаться
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-slate-800 border-blue-500/20">
                      <DialogHeader>
                        <DialogTitle className="text-white">Запись на {service.title.toLowerCase()}</DialogTitle>
                        <DialogDescription className="text-gray-400">
                          Заполните форму и мы свяжемся с вами
                        </DialogDescription>
                      </DialogHeader>
                      <form onSubmit={handleBookingSubmit} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="name" className="text-gray-300">Имя</Label>
                            <Input
                              id="name"
                              value={bookingForm.name}
                              onChange={(e) => setBookingForm({...bookingForm, name: e.target.value})}
                              className="bg-slate-700 border-gray-600 text-white"
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="phone" className="text-gray-300">Телефон</Label>
                            <Input
                              id="phone"
                              value={bookingForm.phone}
                              onChange={(e) => setBookingForm({...bookingForm, phone: e.target.value})}
                              className="bg-slate-700 border-gray-600 text-white"
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="email" className="text-gray-300">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            value={bookingForm.email}
                            onChange={(e) => setBookingForm({...bookingForm, email: e.target.value})}
                            className="bg-slate-700 border-gray-600 text-white"
                          />
                        </div>
                        <div>
                          <Label className="text-gray-300">Модель трактора</Label>
                          <Select onValueChange={(value) => setBookingForm({...bookingForm, tractorModel: value})}>
                            <SelectTrigger className="bg-slate-700 border-gray-600 text-white">
                              <SelectValue placeholder="Выберите модель" />
                            </SelectTrigger>
                            <SelectContent className="bg-slate-700 border-gray-600">
                              {tractors.map(tractor => (
                                <SelectItem key={tractor.id} value={tractor.name} className="text-white">
                                  {tractor.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="message" className="text-gray-300">Дополнительная информация</Label>
                          <Textarea
                            id="message"
                            value={bookingForm.message}
                            onChange={(e) => setBookingForm({...bookingForm, message: e.target.value})}
                            className="bg-slate-700 border-gray-600 text-white"
                            rows={3}
                          />
                        </div>
                        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                          Отправить заявку
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">О компании</h2>
              <p className="text-lg text-gray-300 mb-6">
                Мы — лидеры в области высокотехнологичной сельскохозяйственной техники. 
                Более 15 лет разрабатываем и производим инновационные мини-тракторы с умными системами управления.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                Наша миссия — сделать сельскохозяйственный труд более эффективным и комфортным 
                с помощью передовых технологий и надежной техники.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">500+</div>
                  <div className="text-gray-300">Довольных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">15+</div>
                  <div className="text-gray-300">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">50+</div>
                  <div className="text-gray-300">Сервисных центров</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">99%</div>
                  <div className="text-gray-300">Рекомендаций</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center">
                <Icon name="Factory" size={120} className="text-white/80" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-orange-500 rounded-full p-4">
                <Icon name="Award" size={32} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 px-4 bg-slate-800/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Контакты</h2>
            <p className="text-xl text-gray-300">Свяжитесь с нами любым удобным способом</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Card className="bg-slate-700/50 border-blue-500/20">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Icon name="MapPin" size={24} className="text-blue-400" />
                    <div>
                      <h3 className="text-white font-semibold">Адрес</h3>
                      <p className="text-gray-300">г. Москва, ул. Промышленная, 15</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-slate-700/50 border-blue-500/20">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Icon name="Phone" size={24} className="text-blue-400" />
                    <div>
                      <h3 className="text-white font-semibold">Телефон</h3>
                      <p className="text-gray-300">+7 (495) 123-45-67</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-slate-700/50 border-blue-500/20">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Icon name="Mail" size={24} className="text-blue-400" />
                    <div>
                      <h3 className="text-white font-semibold">Email</h3>
                      <p className="text-gray-300">info@techtractor.ru</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-slate-700/50 border-blue-500/20">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Icon name="Clock" size={24} className="text-blue-400" />
                    <div>
                      <h3 className="text-white font-semibold">Режим работы</h3>
                      <p className="text-gray-300">Пн-Пт: 8:00-18:00, Сб: 9:00-15:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <Card className="bg-slate-700/50 border-blue-500/20">
              <CardHeader>
                <CardTitle className="text-white">Быстрая связь</CardTitle>
                <CardDescription className="text-gray-400">
                  Оставьте заявку и мы перезвоним вам в течение 30 минут
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="contact-name" className="text-gray-300">Имя</Label>
                    <Input
                      id="contact-name"
                      value={bookingForm.name}
                      onChange={(e) => setBookingForm({...bookingForm, name: e.target.value})}
                      className="bg-slate-600 border-gray-500 text-white"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-phone" className="text-gray-300">Телефон</Label>
                    <Input
                      id="contact-phone"
                      value={bookingForm.phone}
                      onChange={(e) => setBookingForm({...bookingForm, phone: e.target.value})}
                      className="bg-slate-600 border-gray-500 text-white"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-message" className="text-gray-300">Сообщение</Label>
                    <Textarea
                      id="contact-message"
                      value={bookingForm.message}
                      onChange={(e) => setBookingForm({...bookingForm, message: e.target.value})}
                      className="bg-slate-600 border-gray-500 text-white"
                      rows={4}
                      placeholder="Расскажите о ваших потребностях..."
                    />
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-blue-500/20 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Tractor" size={32} className="text-blue-400" />
                <span className="text-2xl font-bold text-white">TechTractor</span>
              </div>
              <p className="text-gray-400">
                Высокотехнологичная сельскохозяйственная техника для эффективного земледелия
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Продукция</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Мини-тракторы</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Навесное оборудование</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Запчасти</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Аксессуары</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Техобслуживание</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Ремонт</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Модернизация</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Выездной сервис</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-gray-400">
                <li>+7 (495) 123-45-67</li>
                <li>info@techtractor.ru</li>
                <li>г. Москва, ул. Промышленная, 15</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TechTractor. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;