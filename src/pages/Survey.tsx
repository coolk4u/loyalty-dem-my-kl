
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { FileText, ArrowLeft, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Survey = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState({
    question1: '',
    question2: '',
    question3: ''
  });
  const [isCompleted, setIsCompleted] = useState(false);

  const questions = [
    {
      id: 1,
      title: "What type of grouting project are you working on?",
      options: [
        "Floor tiles in bathroom",
        "Wall tiles in kitchen",
        "Outdoor patio/terrace",
        "Swimming pool's area"
      ]
    },
    {
      id: 2,
      title: "Which MYK Laticrete product do you prefer for heavy-duty applications?",
      options: [
        "MYK LATICRETE PermaColor Grout",
        "MYK LATICRETE SPECTRALOCK Pro Premium",
        "MYK LATICRETE Latasil",
        "MYK LATICRETE 1600 Unsanded Grout"
      ]
    },
    {
      id: 3,
      title: "What's your biggest challenge when selecting grouting products?",
      type: "text",
      placeholder: "Please describe your main concerns..."
    }
  ];

  const handleAnswer = (value: string) => {
    setAnswers(prev => ({
      ...prev,
      [`question${currentQuestion}`]: value
    }));
  };

  const handleNext = () => {
    if (currentQuestion < 3) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const canProceed = answers[`question${currentQuestion}` as keyof typeof answers] !== '';

  if (isCompleted) {
    return (
      <div className="min-h-screen bg-off-white text-black">
        <div className="flex items-center justify-between p-6 pt-12">
          <div className="flex items-center space-x-3">
            <Link to="/">
              <Button variant="ghost" size="icon" className="text-black hover:bg-black/10">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <h1 className="text-xl font-bold text-black">Survey Complete</h1>
          </div>
        </div>

        <div className="px-6">
          <Card className="bg-glass-gradient border-white/10 backdrop-blur-lg p-8 text-center">
            <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-black mb-4">Thank You!</h2>
            <p className="text-gray-700 mb-4">
              Your feedback helps us improve MYK Laticrete products and services.
            </p>
            <Card className="bg-loyalty-navy/50 border-white/10 p-4 mb-6">
              <p className="text-green-400 text-lg font-semibold">+200 points earned!</p>
              <p className="text-gray-700 text-sm">For completing the survey</p>
            </Card>
            <Link to="/">
              <Button className="bg-loyalty-accent hover:bg-loyalty-accent/90 text-white">
                Back to Dashboard
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion - 1];

  return (
    <div className="min-h-screen bg-off-white text-black">
      <div className="flex items-center justify-between p-6 pt-12">
        <div className="flex items-center space-x-3">
          <Link to="/">
            <Button variant="ghost" size="icon" className="text-black hover:bg-black/10">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <h1 className="text-xl font-bold text-black">MYK Laticrete Survey</h1>
        </div>
        <FileText className="w-6 h-6 text-orange-500" />
      </div>

      <div className="px-6">
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-700 mb-2">
            <span>Question {currentQuestion} of 3</span>
            <span>{Math.round((currentQuestion / 3) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-300 rounded-full h-2">
            <div 
              className="bg-orange-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentQuestion / 3) * 100}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <Card className="bg-glass-gradient border-white/10 backdrop-blur-lg p-6 mb-6">
          <h2 className="text-lg font-semibold text-black mb-6">{currentQ.title}</h2>
          
          {currentQ.type === 'text' ? (
            <Textarea
              placeholder={currentQ.placeholder}
              value={answers[`question${currentQuestion}` as keyof typeof answers]}
              onChange={(e) => handleAnswer(e.target.value)}
              className="bg-white border-gray-300 text-black placeholder-gray-500 min-h-[120px]"
            />
          ) : (
            <RadioGroup
              value={answers[`question${currentQuestion}` as keyof typeof answers]}
              onValueChange={handleAnswer}
              className="space-y-4"
            >
              {currentQ.options?.map((option, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <RadioGroupItem 
                    value={option} 
                    id={`option-${index}`}
                    className="border-gray-400 text-orange-500"
                  />
                  <Label 
                    htmlFor={`option-${index}`}
                    className="text-black cursor-pointer flex-1 py-2"
                  >
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          )}
        </Card>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <Button
            onClick={handlePrevious}
            disabled={currentQuestion === 1}
            variant="outline"
            className="border-gray-300 text-black hover:bg-gray-100"
          >
            Previous
          </Button>
          
          <Button
            onClick={handleNext}
            disabled={!canProceed}
            className="bg-orange-500 hover:bg-orange-500/90 text-white"
          >
            {currentQuestion === 3 ? 'Complete Survey' : 'Next'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Survey;
