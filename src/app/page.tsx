"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Activity, 
  Target, 
  Zap, 
  Shield, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight,
  Flame,
  Brain,
  Heart,
  Dumbbell,
  BookOpen,
  Download,
  MessageCircle,
  Star,
  Lock,
  ChevronRight
} from "lucide-react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A0A] via-[#111111] to-[#0A0A0A]">
      {/* Header/Navigation */}
      <header className="fixed top-0 w-full bg-black/80 backdrop-blur-xl border-b border-[#D4AF37]/20 z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Flame className="w-8 h-8 text-[#D4AF37]" />
            <div>
              <h1 className="text-xl font-bold text-white">POTÊNCIA TOTAL</h1>
              <p className="text-xs text-[#D4AF37]">Método Masculino 360°</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => setActiveSection("home")} className="text-gray-300 hover:text-[#D4AF37] transition-colors">Início</button>
            <button onClick={() => setActiveSection("quiz")} className="text-gray-300 hover:text-[#D4AF37] transition-colors">Quiz</button>
            <button onClick={() => setActiveSection("receitas")} className="text-gray-300 hover:text-[#D4AF37] transition-colors">Receitas</button>
            <button onClick={() => setActiveSection("tecnicas")} className="text-gray-300 hover:text-[#D4AF37] transition-colors">Técnicas</button>
            <button onClick={() => setActiveSection("treinos")} className="text-gray-300 hover:text-[#D4AF37] transition-colors">Treinos</button>
            <button onClick={() => setActiveSection("planos")} className="text-gray-300 hover:text-[#D4AF37] transition-colors">Planos</button>
            <Button className="bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-black hover:from-[#B8941F] hover:to-[#D4AF37]">
              ÁREA VIP
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      {activeSection === "home" && (
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-[#D4AF37]/20 text-[#D4AF37] border-[#D4AF37]/30 px-6 py-2 text-sm">
                MÉTODO CIENTIFICAMENTE COMPROVADO
              </Badge>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Recupere Sua <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#FFD700]">Potência Masculina</span> de Forma Natural
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-400 mb-4 max-w-3xl mx-auto">
                Discreta e Cientificamente Comprovada
              </p>
              
              <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
                Comece pelo nosso diagnóstico exclusivo e receba um plano personalizado
              </p>
              
              <Button 
                onClick={() => setActiveSection("quiz")}
                className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black text-lg px-12 py-6 rounded-full hover:scale-105 transition-all duration-300 shadow-2xl shadow-[#D4AF37]/50"
              >
                <Zap className="w-6 h-6 mr-2" />
                FAZER O QUIZ AGORA
                <ArrowRight className="w-6 h-6 ml-2" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
              {[
                { number: "10.000+", label: "Homens Transformados" },
                { number: "94%", label: "Taxa de Sucesso" },
                { number: "7-30", label: "Dias para Resultados" },
                { number: "100%", label: "Natural e Seguro" }
              ].map((stat, i) => (
                <Card key={i} className="bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] border-[#D4AF37]/20 p-6 text-center hover:border-[#D4AF37]/50 transition-all">
                  <p className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-2">{stat.number}</p>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </Card>
              ))}
            </div>

            {/* Como Funciona */}
            <div className="mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                Como Funciona o <span className="text-[#D4AF37]">Método 360°</span>
              </h2>
              
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { icon: Target, title: "1. Diagnóstico", desc: "Quiz personalizado identifica suas causas específicas" },
                  { icon: BookOpen, title: "2. Rotina", desc: "Plano diário com receitas, treinos e técnicas" },
                  { icon: Brain, title: "3. Técnicas", desc: "Métodos mentais e físicos guiados passo a passo" },
                  { icon: TrendingUp, title: "4. Resultados", desc: "Acompanhe sua evolução e conquiste metas" }
                ].map((step, i) => (
                  <Card key={i} className="bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] border-[#D4AF37]/20 p-6 hover:border-[#D4AF37]/50 transition-all group">
                    <step.icon className="w-12 h-12 text-[#D4AF37] mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-400">{step.desc}</p>
                  </Card>
                ))}
              </div>
            </div>

            {/* Depoimentos */}
            <div className="mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                Histórias de <span className="text-[#D4AF37]">Transformação</span>
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { name: "Carlos M.", age: "34 anos", text: "Depois de 2 anos lutando contra ansiedade, em 15 dias recuperei minha confiança. O método é discreto e realmente funciona.", rating: 5 },
                  { name: "Roberto S.", age: "41 anos", text: "As receitas e técnicas de respiração mudaram tudo. Minha parceira notou a diferença já na primeira semana.", rating: 5 },
                  { name: "Felipe L.", age: "29 anos", text: "Achei que era problema físico, mas era mental. O programa me ensinou a controlar a ansiedade e os resultados vieram.", rating: 5 }
                ].map((testimonial, i) => (
                  <Card key={i} className="bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] border-[#D4AF37]/20 p-6 hover:border-[#D4AF37]/50 transition-all">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-4 italic">&quot;{testimonial.text}&quot;</p>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8941F] flex items-center justify-center text-black font-bold">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-white font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-gray-400">{testimonial.age}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* CTA Final */}
            <Card className="bg-gradient-to-r from-[#D4AF37]/20 to-[#FFD700]/20 border-[#D4AF37]/30 p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Pronto para Transformar Sua Vida?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Comece agora com nosso diagnóstico gratuito
              </p>
              <Button 
                onClick={() => setActiveSection("quiz")}
                className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black text-lg px-12 py-6 rounded-full hover:scale-105 transition-all duration-300"
              >
                INICIAR DIAGNÓSTICO GRATUITO
                <ChevronRight className="w-6 h-6 ml-2" />
              </Button>
            </Card>
          </div>
        </section>
      )}

      {/* Quiz Section */}
      {activeSection === "quiz" && (
        <QuizSection onBack={() => setActiveSection("home")} />
      )}

      {/* Receitas Section */}
      {activeSection === "receitas" && (
        <ReceitasSection onBack={() => setActiveSection("home")} />
      )}

      {/* Técnicas Section */}
      {activeSection === "tecnicas" && (
        <TecnicasSection onBack={() => setActiveSection("home")} />
      )}

      {/* Treinos Section */}
      {activeSection === "treinos" && (
        <TreinosSection onBack={() => setActiveSection("home")} />
      )}

      {/* Planos Section */}
      {activeSection === "planos" && (
        <PlanosSection onBack={() => setActiveSection("home")} />
      )}

      {/* Footer */}
      <footer className="bg-black border-t border-[#D4AF37]/20 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Flame className="w-6 h-6 text-[#D4AF37]" />
                <span className="text-white font-bold">POTÊNCIA TOTAL</span>
              </div>
              <p className="text-gray-400 text-sm">Método Masculino 360° - Transforme sua vida de forma natural e discreta</p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Navegação</h4>
              <div className="space-y-2">
                <button onClick={() => setActiveSection("home")} className="block text-gray-400 hover:text-[#D4AF37] transition-colors text-sm">Início</button>
                <button onClick={() => setActiveSection("quiz")} className="block text-gray-400 hover:text-[#D4AF37] transition-colors text-sm">Quiz</button>
                <button onClick={() => setActiveSection("receitas")} className="block text-gray-400 hover:text-[#D4AF37] transition-colors text-sm">Receitas</button>
                <button onClick={() => setActiveSection("planos")} className="block text-gray-400 hover:text-[#D4AF37] transition-colors text-sm">Planos</button>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Recursos</h4>
              <div className="space-y-2">
                <button className="block text-gray-400 hover:text-[#D4AF37] transition-colors text-sm">Downloads</button>
                <button className="block text-gray-400 hover:text-[#D4AF37] transition-colors text-sm">Área VIP</button>
                <button className="block text-gray-400 hover:text-[#D4AF37] transition-colors text-sm">Suporte</button>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Contato</h4>
              <div className="space-y-2">
                <p className="text-gray-400 text-sm">suporte@potenciatotal.com</p>
                <p className="text-gray-400 text-sm">Atendimento 24/7</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-[#D4AF37]/20 pt-8 text-center">
            <p className="text-gray-400 text-sm">© 2024 Potência Total - Método Masculino 360°. Todos os direitos reservados.</p>
            <p className="text-gray-500 text-xs mt-2">Este site não substitui orientação médica profissional.</p>
          </div>
        </div>
      </footer>

      {/* Floating Chat Button */}
      <button className="fixed bottom-8 right-8 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 z-50">
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
}

// Quiz Component
function QuizSection({ onBack }: { onBack: () => void }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 0,
      question: "Qual é a sua idade?",
      options: ["18-25 anos", "26-35 anos", "36-45 anos", "46-55 anos", "56+ anos"]
    },
    {
      id: 1,
      question: "Com que frequência você enfrenta dificuldades de ereção?",
      options: ["Raramente (menos de 25%)", "Às vezes (25-50%)", "Frequentemente (50-75%)", "Quase sempre (mais de 75%)"]
    },
    {
      id: 2,
      question: "Quando ocorre a dificuldade?",
      options: ["No início da relação", "Durante a relação", "Ambos os momentos", "Varia"]
    },
    {
      id: 3,
      question: "Qual seu nível de ansiedade antes da intimidade?",
      options: ["Muito baixo", "Baixo", "Moderado", "Alto", "Muito alto"]
    },
    {
      id: 4,
      question: "Com que frequência consome conteúdo adulto?",
      options: ["Nunca", "Raramente", "Ocasionalmente", "Frequentemente", "Diariamente"]
    },
    {
      id: 5,
      question: "Como você avalia sua alimentação?",
      options: ["Muito saudável", "Saudável", "Regular", "Pouco saudável", "Não saudável"]
    },
    {
      id: 6,
      question: "Quantas horas você dorme por noite?",
      options: ["Menos de 5h", "5-6h", "6-7h", "7-8h", "Mais de 8h"]
    },
    {
      id: 7,
      question: "Pratica exercícios físicos regularmente?",
      options: ["Sim, diariamente", "Sim, 3-4x por semana", "Sim, 1-2x por semana", "Raramente", "Não pratico"]
    },
    {
      id: 8,
      question: "Possui alguma condição de saúde?",
      options: ["Diabetes", "Hipertensão", "Problemas cardíacos", "Obesidade", "Nenhuma"]
    },
    {
      id: 9,
      question: "Consome álcool com que frequência?",
      options: ["Nunca", "Raramente", "Socialmente", "Frequentemente", "Diariamente"]
    },
    {
      id: 10,
      question: "Toma algum medicamento regularmente?",
      options: ["Sim, antidepressivos", "Sim, para pressão", "Sim, outros", "Não tomo"]
    },
    {
      id: 11,
      question: "Como está seu nível de estresse?",
      options: ["Muito baixo", "Baixo", "Moderado", "Alto", "Muito alto"]
    },
    {
      id: 12,
      question: "Como está sua autoestima sexual?",
      options: ["Muito alta", "Alta", "Moderada", "Baixa", "Muito baixa"]
    },
    {
      id: 13,
      question: "Como está sua libido (desejo sexual)?",
      options: ["Muito alta", "Alta", "Normal", "Baixa", "Muito baixa"]
    }
  ];

  const handleAnswer = (answer: string) => {
    setAnswers({ ...answers, [currentQuestion]: answer });
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateResults = () => {
    // Lógica simplificada de análise
    const anxietyLevel = answers[3] || "";
    const frequency = answers[1] || "";
    const lifestyle = answers[5] || "";
    
    let mainIssue = "Ansiedade de Desempenho";
    let recommendedPlan = "15 dias";
    
    if (anxietyLevel.includes("Alto") || anxietyLevel.includes("Muito alto")) {
      mainIssue = "Ansiedade de Desempenho";
      recommendedPlan = "30 dias";
    } else if (lifestyle.includes("Não saudável") || lifestyle.includes("Pouco saudável")) {
      mainIssue = "Estilo de Vida e Circulação";
      recommendedPlan = "30 dias";
    } else if (frequency.includes("Frequentemente") || frequency.includes("Quase sempre")) {
      mainIssue = "Múltiplos Fatores";
      recommendedPlan = "30 dias";
    }
    
    return { mainIssue, recommendedPlan };
  };

  if (showResults) {
    const { mainIssue, recommendedPlan } = calculateResults();
    
    return (
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Button onClick={onBack} variant="ghost" className="mb-8 text-gray-400 hover:text-[#D4AF37]">
            ← Voltar
          </Button>
          
          <Card className="bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] border-[#D4AF37]/30 p-8 md:p-12">
            <div className="text-center mb-8">
              <CheckCircle2 className="w-16 h-16 text-[#D4AF37] mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Seu Relatório Personalizado
              </h2>
              <p className="text-gray-400">Análise completa baseada em suas respostas</p>
            </div>

            <div className="space-y-6 mb-8">
              <Card className="bg-black/50 border-[#D4AF37]/20 p-6">
                <h3 className="text-xl font-bold text-[#D4AF37] mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Causa Principal Identificada
                </h3>
                <p className="text-white text-lg">{mainIssue}</p>
              </Card>

              <Card className="bg-black/50 border-[#D4AF37]/20 p-6">
                <h3 className="text-xl font-bold text-[#D4AF37] mb-3 flex items-center gap-2">
                  <Brain className="w-5 h-5" />
                  Fatores Contribuintes
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                    Ansiedade e estresse mental
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                    Padrões de estilo de vida
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                    Circulação sanguínea
                  </li>
                </ul>
              </Card>

              <Card className="bg-black/50 border-[#D4AF37]/20 p-6">
                <h3 className="text-xl font-bold text-[#D4AF37] mb-3 flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Recomendações Iniciais
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <Flame className="w-4 h-4 text-[#D4AF37]" />
                    Técnicas de respiração diárias
                  </li>
                  <li className="flex items-center gap-2">
                    <Flame className="w-4 h-4 text-[#D4AF37]" />
                    Receitas vasodilatadoras
                  </li>
                  <li className="flex items-center gap-2">
                    <Flame className="w-4 h-4 text-[#D4AF37]" />
                    Treino para circulação
                  </li>
                  <li className="flex items-center gap-2">
                    <Flame className="w-4 h-4 text-[#D4AF37]" />
                    Mindfulness sexual
                  </li>
                </ul>
              </Card>

              <Card className="bg-gradient-to-r from-[#D4AF37]/20 to-[#FFD700]/20 border-[#D4AF37]/30 p-6">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Plano Recomendado
                </h3>
                <p className="text-2xl font-bold text-[#D4AF37] mb-2">Programa de {recommendedPlan}</p>
                <p className="text-gray-300">Baseado no seu perfil, este é o plano ideal para resultados consistentes</p>
              </Card>
            </div>

            <div className="text-center">
              <Button 
                onClick={() => onBack()}
                className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black text-lg px-12 py-6 rounded-full hover:scale-105 transition-all duration-300"
              >
                VER PLANOS E COMEÇAR AGORA
                <ArrowRight className="w-6 h-6 ml-2" />
              </Button>
            </div>
          </Card>
        </div>
      </section>
    );
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <Button onClick={onBack} variant="ghost" className="mb-8 text-gray-400 hover:text-[#D4AF37]">
          ← Voltar
        </Button>
        
        <Card className="bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] border-[#D4AF37]/30 p-8 md:p-12">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-400">Pergunta {currentQuestion + 1} de {questions.length}</span>
              <span className="text-sm text-[#D4AF37]">{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            {questions[currentQuestion].question}
          </h2>

          <div className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className="w-full text-left p-4 rounded-lg bg-black/50 border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/10 transition-all text-white"
              >
                {option}
              </button>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}

// Receitas Component
function ReceitasSection({ onBack }: { onBack: () => void }) {
  const receitas = [
    {
      name: "Shot Estimulante Matinal",
      time: "5 min",
      potency: 5,
      benefits: "Aumenta circulação e energia",
      when: "Pela manhã, em jejum",
      ingredients: ["Gengibre fresco", "Limão", "Mel", "Pimenta cayenne"],
      image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=300&fit=crop"
    },
    {
      name: "Smoothie Pré-Intimidade",
      time: "10 min",
      potency: 4,
      benefits: "Vasodilatação e energia",
      when: "2-3 horas antes",
      ingredients: ["Banana", "Morango", "Aveia", "Mel", "Canela"],
      image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400&h=300&fit=crop"
    },
    {
      name: "Suco Vasodilatador de Beterraba",
      time: "8 min",
      potency: 5,
      benefits: "Melhora circulação sanguínea",
      when: "Diariamente",
      ingredients: ["Beterraba", "Cenoura", "Maçã", "Gengibre"],
      image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=400&h=300&fit=crop"
    },
    {
      name: "Café Turbo Afrodisíaco",
      time: "5 min",
      potency: 4,
      benefits: "Energia e foco mental",
      when: "Pela manhã",
      ingredients: ["Café", "Canela", "Cacau", "Mel", "Cardamomo"],
      image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400&h=300&fit=crop"
    },
    {
      name: "Chá Anti-Ansiedade Sexual",
      time: "10 min",
      potency: 3,
      benefits: "Reduz ansiedade e estresse",
      when: "À noite ou antes da intimidade",
      ingredients: ["Camomila", "Melissa", "Valeriana", "Mel"],
      image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop"
    },
    {
      name: "Mix Pré-Sexo Energético",
      time: "5 min",
      potency: 5,
      benefits: "Energia imediata e libido",
      when: "1 hora antes",
      ingredients: ["Castanhas", "Chocolate amargo", "Mel", "Goji berry"],
      image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <Button onClick={onBack} variant="ghost" className="mb-8 text-gray-400 hover:text-[#D4AF37]">
          ← Voltar
        </Button>
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Biblioteca de <span className="text-[#D4AF37]">Receitas Premium</span>
          </h1>
          <p className="text-xl text-gray-400">Receitas naturais cientificamente formuladas para potência masculina</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {receitas.map((receita, index) => (
            <Card key={index} className="bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] border-[#D4AF37]/20 overflow-hidden hover:border-[#D4AF37]/50 transition-all group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={receita.image} 
                  alt={receita.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 flex gap-1">
                  {[...Array(receita.potency)].map((_, i) => (
                    <Flame key={i} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{receita.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{receita.benefits}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Activity className="w-4 h-4 text-[#D4AF37]" />
                    Tempo: {receita.time}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Zap className="w-4 h-4 text-[#D4AF37]" />
                    Quando usar: {receita.when}
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-[#D4AF37] mb-2">Ingredientes:</p>
                  <div className="flex flex-wrap gap-2">
                    {receita.ingredients.map((ing, i) => (
                      <Badge key={i} className="bg-[#D4AF37]/20 text-[#D4AF37] border-[#D4AF37]/30">
                        {ing}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-black hover:from-[#B8941F] hover:to-[#D4AF37]">
                  Ver Receita Completa
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <Card className="mt-12 bg-gradient-to-r from-[#D4AF37]/20 to-[#FFD700]/20 border-[#D4AF37]/30 p-8 text-center">
          <Lock className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-2">Mais 24 Receitas Exclusivas</h3>
          <p className="text-gray-300 mb-6">Acesse planos alimentares completos de 7, 15 e 30 dias na área VIP</p>
          <Button className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black px-8 py-4">
            DESBLOQUEAR RECEITAS VIP
          </Button>
        </Card>
      </div>
    </section>
  );
}

// Técnicas Component
function TecnicasSection({ onBack }: { onBack: () => void }) {
  const tecnicas = [
    {
      title: "Respiração 4-7-8 para Ereção",
      category: "Respiração",
      duration: "5 min",
      level: "Iniciante",
      description: "Técnica de respiração que aumenta oxigenação e reduz ansiedade de desempenho",
      steps: [
        "Inspire pelo nariz contando até 4",
        "Segure a respiração contando até 7",
        "Expire pela boca contando até 8",
        "Repita por 5 minutos antes da intimidade"
      ]
    },
    {
      title: "Mindfulness Sexual",
      category: "Mental",
      duration: "10 min",
      level: "Intermediário",
      description: "Técnica de presença plena para eliminar pensamentos intrusivos durante o sexo",
      steps: [
        "Foque nas sensações físicas do momento",
        "Observe pensamentos sem julgamento",
        "Retorne o foco para as sensações corporais",
        "Pratique diariamente por 10 minutos"
      ]
    },
    {
      title: "Técnica de Parada e Início",
      category: "Controle",
      duration: "15 min",
      level: "Intermediário",
      description: "Método para controlar ejaculação precoce e prolongar o desempenho",
      steps: [
        "Estimule até sentir proximidade do clímax",
        "Pare completamente a estimulação",
        "Respire profundamente até controlar",
        "Retome após 30-60 segundos"
      ]
    },
    {
      title: "Visualização de Sucesso",
      category: "Mental",
      duration: "8 min",
      level: "Iniciante",
      description: "Técnica de visualização para aumentar confiança e reduzir ansiedade",
      steps: [
        "Feche os olhos e relaxe completamente",
        "Visualize uma experiência sexual positiva",
        "Sinta as emoções de confiança e prazer",
        "Pratique diariamente antes de dormir"
      ]
    },
    {
      title: "Exercício de Foco Sensorial",
      category: "Sensorial",
      duration: "12 min",
      level: "Avançado",
      description: "Técnica para aumentar consciência corporal e conexão com o parceiro",
      steps: [
        "Explore sensações sem objetivo sexual",
        "Foque em texturas, temperatura e toque",
        "Comunique o que sente ao parceiro",
        "Progrida gradualmente para intimidade"
      ]
    },
    {
      title: "Comunicação Emocional",
      category: "Relacionamento",
      duration: "20 min",
      level: "Intermediário",
      description: "Técnica de diálogo para reduzir pressão e aumentar intimidade",
      steps: [
        "Escolha momento tranquilo para conversar",
        "Expresse sentimentos sem culpar",
        "Ouça ativamente o parceiro",
        "Estabeleçam metas juntos"
      ]
    }
  ];

  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <Button onClick={onBack} variant="ghost" className="mb-8 text-gray-400 hover:text-[#D4AF37]">
          ← Voltar
        </Button>
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Técnicas <span className="text-[#D4AF37]">Guiadas</span>
          </h1>
          <p className="text-xl text-gray-400">Métodos práticos para controle mental e físico</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {tecnicas.map((tecnica, index) => (
            <Card key={index} className="bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] border-[#D4AF37]/20 p-6 hover:border-[#D4AF37]/50 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <Badge className="bg-[#D4AF37]/20 text-[#D4AF37] border-[#D4AF37]/30 mb-2">
                    {tecnica.category}
                  </Badge>
                  <h3 className="text-xl font-bold text-white">{tecnica.title}</h3>
                </div>
                <Brain className="w-8 h-8 text-[#D4AF37]" />
              </div>

              <p className="text-gray-400 mb-4">{tecnica.description}</p>

              <div className="flex gap-4 mb-4 text-sm">
                <div className="flex items-center gap-1 text-gray-400">
                  <Activity className="w-4 h-4 text-[#D4AF37]" />
                  {tecnica.duration}
                </div>
                <div className="flex items-center gap-1 text-gray-400">
                  <Target className="w-4 h-4 text-[#D4AF37]" />
                  {tecnica.level}
                </div>
              </div>

              <div className="bg-black/50 rounded-lg p-4 mb-4">
                <p className="text-sm font-semibold text-[#D4AF37] mb-2">Passo a passo:</p>
                <ol className="space-y-2">
                  {tecnica.steps.map((step, i) => (
                    <li key={i} className="text-sm text-gray-300 flex gap-2">
                      <span className="text-[#D4AF37] font-bold">{i + 1}.</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              <Button className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-black hover:from-[#B8941F] hover:to-[#D4AF37]">
                Iniciar Técnica Guiada
              </Button>
            </Card>
          ))}
        </div>

        <Card className="mt-12 bg-gradient-to-r from-[#D4AF37]/20 to-[#FFD700]/20 border-[#D4AF37]/30 p-8 text-center">
          <Lock className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-2">Técnicas Avançadas com Áudio e Vídeo</h3>
          <p className="text-gray-300 mb-6">Acesse guias completos com instruções em áudio e vídeo na área VIP</p>
          <Button className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black px-8 py-4">
            DESBLOQUEAR TÉCNICAS VIP
          </Button>
        </Card>
      </div>
    </section>
  );
}

// Treinos Component
function TreinosSection({ onBack }: { onBack: () => void }) {
  const treinos = [
    {
      title: "Treino Testosterona Boost",
      focus: "Aumentar testosterona",
      duration: "30 min",
      level: "Intermediário",
      exercises: [
        { name: "Agachamento", sets: "4x8-10", benefit: "Libera testosterona" },
        { name: "Levantamento terra", sets: "3x6-8", benefit: "Hormônio anabólico" },
        { name: "Supino", sets: "4x8-10", benefit: "Força e hormônios" },
        { name: "Barra fixa", sets: "3x máx", benefit: "Testosterona natural" }
      ],
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop"
    },
    {
      title: "Treino Circulação Sanguínea",
      focus: "Melhorar fluxo sanguíneo",
      duration: "25 min",
      level: "Iniciante",
      exercises: [
        { name: "Caminhada rápida", sets: "15 min", benefit: "Circulação geral" },
        { name: "Polichinelos", sets: "3x30", benefit: "Cardio e fluxo" },
        { name: "Burpees", sets: "3x10", benefit: "Circulação intensa" },
        { name: "Prancha", sets: "3x45s", benefit: "Core e circulação" }
      ],
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=300&fit=crop"
    },
    {
      title: "Treino Libido Power",
      focus: "Aumentar desejo sexual",
      duration: "35 min",
      level: "Avançado",
      exercises: [
        { name: "Agachamento búlgaro", sets: "3x12", benefit: "Glúteos e libido" },
        { name: "Avanço", sets: "3x10", benefit: "Pernas e hormônios" },
        { name: "Stiff", sets: "4x10", benefit: "Posterior e testosterona" },
        { name: "Elevação pélvica", sets: "4x15", benefit: "Região pélvica" }
      ],
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&h=300&fit=crop"
    },
    {
      title: "Treino Anti-Estresse",
      focus: "Reduzir cortisol",
      duration: "20 min",
      level: "Iniciante",
      exercises: [
        { name: "Yoga flow", sets: "10 min", benefit: "Relaxamento" },
        { name: "Alongamento dinâmico", sets: "5 min", benefit: "Flexibilidade" },
        { name: "Respiração profunda", sets: "5 min", benefit: "Calma mental" }
      ],
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop"
    },
    {
      title: "Exercícios Kegel Masculino",
      focus: "Controle e ereção",
      duration: "10 min",
      level: "Todos os níveis",
      exercises: [
        { name: "Contração básica", sets: "3x10", benefit: "Fortalece assoalho pélvico" },
        { name: "Contração prolongada", sets: "3x10s", benefit: "Resistência" },
        { name: "Contração rápida", sets: "3x20", benefit: "Controle ejaculatório" },
        { name: "Ponte com contração", sets: "3x12", benefit: "Força pélvica" }
      ],
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <Button onClick={onBack} variant="ghost" className="mb-8 text-gray-400 hover:text-[#D4AF37]">
          ← Voltar
        </Button>
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Treinos <span className="text-[#D4AF37]">Masculinos</span>
          </h1>
          <p className="text-xl text-gray-400">Exercícios específicos para potência e desempenho</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {treinos.map((treino, index) => (
            <Card key={index} className="bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] border-[#D4AF37]/20 overflow-hidden hover:border-[#D4AF37]/50 transition-all group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={treino.image} 
                  alt={treino.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-black/70 text-[#D4AF37] border-[#D4AF37]/30">
                    {treino.level}
                  </Badge>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{treino.title}</h3>
                    <p className="text-sm text-[#D4AF37]">{treino.focus}</p>
                  </div>
                  <Dumbbell className="w-6 h-6 text-[#D4AF37]" />
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                  <Activity className="w-4 h-4 text-[#D4AF37]" />
                  Duração: {treino.duration}
                </div>

                <div className="bg-black/50 rounded-lg p-4 mb-4">
                  <p className="text-sm font-semibold text-[#D4AF37] mb-3">Exercícios:</p>
                  <div className="space-y-2">
                    {treino.exercises.map((ex, i) => (
                      <div key={i} className="flex justify-between items-start text-sm">
                        <div>
                          <p className="text-white font-medium">{ex.name}</p>
                          <p className="text-xs text-gray-400">{ex.benefit}</p>
                        </div>
                        <Badge className="bg-[#D4AF37]/20 text-[#D4AF37] border-[#D4AF37]/30 text-xs">
                          {ex.sets}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-black hover:from-[#B8941F] hover:to-[#D4AF37]">
                  Ver Treino Completo
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <Card className="mt-12 bg-gradient-to-r from-[#D4AF37]/20 to-[#FFD700]/20 border-[#D4AF37]/30 p-8 text-center">
          <Lock className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-2">Treinos Ilustrados com Vídeos</h3>
          <p className="text-gray-300 mb-6">Acesse demonstrações em vídeo e programas completos na área VIP</p>
          <Button className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black px-8 py-4">
            DESBLOQUEAR TREINOS VIP
          </Button>
        </Card>
      </div>
    </section>
  );
}

// Planos Component
function PlanosSection({ onBack }: { onBack: () => void }) {
  const planos = [
    {
      name: "Reinício Masculino",
      duration: "7 Dias",
      price: "R$ 47",
      popular: false,
      features: [
        "5 vídeos educacionais",
        "Plano diário estruturado",
        "5 receitas premium",
        "Checklist de progresso",
        "Técnicas rápidas",
        "Suporte por e-mail"
      ]
    },
    {
      name: "Transformação Acelerada",
      duration: "15 Dias",
      price: "R$ 77",
      popular: true,
      features: [
        "Tudo do plano de 7 dias",
        "10 vídeos educacionais",
        "15 receitas premium exclusivas",
        "Técnicas guiadas em vídeo e áudio",
        "Suporte via WhatsApp",
        "Mural interativo de progresso"
      ]
    },
    {
      name: "Programa Completo",
      duration: "30 Dias",
      price: "R$ 127",
      popular: false,
      features: [
        "Tudo dos planos anteriores",
        "15 vídeos educacionais",
        "30 receitas completas",
        "Treinos ilustrados",
        "Rotinas completas",
        "Consultoria 1:1",
        "Comunidade VIP",
        "Mensagens motivacionais diárias",
        "Certificado de conclusão"
      ]
    }
  ];

  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <Button onClick={onBack} variant="ghost" className="mb-8 text-gray-400 hover:text-[#D4AF37]">
          ← Voltar
        </Button>
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Escolha Seu <span className="text-[#D4AF37]">Plano</span>
          </h1>
          <p className="text-xl text-gray-400">Invista na sua transformação masculina</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {planos.map((plano, index) => (
            <Card 
              key={index} 
              className={`bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] border-[#D4AF37]/20 p-8 hover:border-[#D4AF37]/50 transition-all relative ${
                plano.popular ? 'ring-2 ring-[#D4AF37] scale-105' : ''
              }`}
            >
              {plano.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black px-4 py-1">
                    MAIS POPULAR
                  </Badge>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{plano.name}</h3>
                <p className="text-[#D4AF37] text-lg mb-4">{plano.duration}</p>
                <div className="mb-4">
                  <span className="text-5xl font-bold text-white">{plano.price}</span>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {plano.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                className={`w-full ${
                  plano.popular 
                    ? 'bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black hover:from-[#B8941F] hover:to-[#D4AF37]'
                    : 'bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-black hover:from-[#B8941F] hover:to-[#D4AF37]'
                } py-6 text-lg font-semibold`}
              >
                COMEÇAR AGORA
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Card>
          ))}
        </div>

        {/* Garantia */}
        <Card className="bg-gradient-to-r from-[#D4AF37]/20 to-[#FFD700]/20 border-[#D4AF37]/30 p-8 text-center mb-12">
          <Shield className="w-16 h-16 text-[#D4AF37] mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-2">Garantia de 7 Dias</h3>
          <p className="text-gray-300">Se não estiver satisfeito, devolvemos 100% do seu investimento. Sem perguntas.</p>
        </Card>

        {/* Downloads Gratuitos */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Downloads <span className="text-[#D4AF37]">Gratuitos</span>
          </h2>
          <p className="text-gray-400 mb-8">Comece agora com nossos e-books gratuitos</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "7 Dias de Potência", pages: "24 páginas" },
            { title: "30 Receitas Explosivas", pages: "48 páginas" },
            { title: "Mindfulness Masculino", pages: "32 páginas" },
            { title: "Controle da Ansiedade Sexual", pages: "28 páginas" }
          ].map((ebook, index) => (
            <Card key={index} className="bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] border-[#D4AF37]/20 p-6 hover:border-[#D4AF37]/50 transition-all">
              <Download className="w-12 h-12 text-[#D4AF37] mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">{ebook.title}</h3>
              <p className="text-sm text-gray-400 mb-4">{ebook.pages}</p>
              <Button className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-black hover:from-[#B8941F] hover:to-[#D4AF37]">
                Baixar Grátis
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
