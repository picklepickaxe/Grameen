import { Navbar } from '@/components/Navbar';
import { Card, CardContent } from '@/components/ui/card';
import { Leaf, Users, Target, CheckCircle, Eye, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const AboutUs = () => {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: Users,
      title: t('aboutUs.farmerDashboardTitle'),
      description: t('aboutUs.farmerDashboardDescription')
    },
    {
      icon: Target,
      title: t('aboutUs.wasteMarketplaceTitle'), 
      description: t('aboutUs.wasteMarketplaceDescription')
    },
    {
      icon: CheckCircle,
      title: t('aboutUs.machineBookingTitle'),
      description: t('aboutUs.machineBookingDescription')
    },
    {
      icon: Eye,
      title: t('aboutUs.transparencyDashboardTitle'),
      description: t('aboutUs.transparencyDashboardDescription')
    }
  ];

  const missions = [
    t('aboutUs.mission1'),
    t('aboutUs.mission2'),
    t('aboutUs.mission3'),
    t('aboutUs.mission4')
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <Leaf className="h-12 w-12 text-primary mr-4" />
            <h1 className="text-4xl md:text-6xl font-bold">{t('aboutUs.pageTitle')}</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('aboutUs.heroSubtitle')}
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">{t('aboutUs.whoWeAreTitle')}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('aboutUs.whoWeAreDescription')}
              </p>
            </div>
            <div className="relative">
              <Card className="bg-gradient-to-br from-primary/20 to-secondary/20 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Heart className="h-8 w-8 text-primary mr-3" />
                    <h3 className="text-2xl font-semibold">{t('aboutUs.ourBeliefTitle')}</h3>
                  </div>
                  <p className="text-muted-foreground">
                    {t('aboutUs.ourBeliefDescription')}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Vision */}
            <Card className="h-full">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Eye className="h-8 w-8 text-primary mr-3" />
                  <h2 className="text-3xl font-bold text-primary">{t('aboutUs.ourVisionTitle')}</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t('aboutUs.ourVisionDescription')}
                </p>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="h-full">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Target className="h-8 w-8 text-primary mr-3" />
                  <h2 className="text-3xl font-bold text-primary">{t('aboutUs.ourMissionTitle')}</h2>
                </div>
                <ul className="space-y-4">
                  {missions.map((mission, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">{mission}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">{t('aboutUs.whatWeOfferTitle')}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t('aboutUs.whatWeOfferSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-primary">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Grameen */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">{t('aboutUs.whyGrameenTitle')}</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl leading-relaxed mb-8 opacity-90">
              {t('aboutUs.whyGrameenDescription')}
            </p>
            <div className="flex items-center justify-center">
              <Leaf className="h-16 w-16 mr-4 opacity-80" />
              <div className="text-left">
                <div className="text-2xl font-bold">Grameen</div>
                <div className="text-sm opacity-80">{t('aboutUs.grameenTagline')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Leaf className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-primary">Grameen</span>
            </div>
            <p className="text-muted-foreground text-center">
              {t('aboutUs.footerDescription')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;