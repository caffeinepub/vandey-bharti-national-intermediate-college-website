import { Phone, MapPin, Mail, BookOpen, GraduationCap, Users, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground shadow-lg">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <GraduationCap className="w-10 h-10 md:w-12 md:h-12" />
            <h1 className="text-3xl md:text-5xl font-bold text-center leading-tight">
              Vandey Bharti National<br className="md:hidden" /> Intermediate College
            </h1>
          </div>
          <p className="text-center text-lg md:text-xl text-primary-foreground/90 font-medium">
            Excellence in Education
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-12 md:py-16">
        {/* Welcome Section */}
        <section className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Welcome to Our Institution
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Committed to providing quality education and nurturing young minds for a brighter future.
            We strive for academic excellence and holistic development of every student.
          </p>
        </section>

        {/* Features Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-6 text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">Quality Education</h3>
                <p className="text-muted-foreground">
                  Comprehensive curriculum designed to foster academic excellence and critical thinking
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-6 text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">Experienced Faculty</h3>
                <p className="text-muted-foreground">
                  Dedicated teachers committed to student success and personal growth
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-6 text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">Holistic Development</h3>
                <p className="text-muted-foreground">
                  Focus on overall personality development through academics and co-curricular activities
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="mb-12">
          <div className="bg-card border-2 rounded-lg shadow-md p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
              Contact Information
            </h2>
            
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Address</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Shyamdeurwa, Mahmada<br />
                    Uttar Pradesh - 273301<br />
                    India
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Phone</h3>
                  <a 
                    href="tel:+919118508216" 
                    className="text-muted-foreground hover:text-primary transition-colors text-lg"
                  >
                    +91 9118508216
                  </a>
                </div>
              </div>

              {/* Email (Optional placeholder) */}
              <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Get in Touch</h3>
                  <p className="text-muted-foreground">
                    For admissions and inquiries, please call us during office hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-accent/20 rounded-lg p-8 md:p-12 border-2">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
            Join Our Academic Community
          </h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            We welcome students who are eager to learn and grow. Contact us today to learn more about admissions.
          </p>
          <a 
            href="tel:+919118508216"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity shadow-md"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted/50 border-t mt-auto">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <span>© {currentYear} Vandey Bharti National Intermediate College. All rights reserved.</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <span>Built with</span>
              <span className="text-red-500">♥</span>
              <span>using</span>
              <a 
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                caffeine.ai
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
