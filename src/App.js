import React, { useRef, useState, useEffect } from 'react';
import Card from './components/card';
import MenuArea from './components/menuArea';
import PageHeader from './components/pageHeader';

function App() {
  const [clickedButtonId, setClickedButtonId] = useState(null);

  const handleButtonClick = (id) => {
    setClickedButtonId(id);
    if (cardAreaRef.current) {
      cardAreaRef.current.scrollLeft = 0;
      setIsAtLeftEdge(true); 
      setIsAtRightEdge(false);
    }
  };

  useEffect(() => {
    console.log(clickedButtonId);
  }, [clickedButtonId]);

  const cardAreaRef = useRef(null);
  const [isAtLeftEdge, setIsAtLeftEdge] = useState(true);
  const [isAtRightEdge, setIsAtRightEdge] = useState(false);

  const scrollLeft = () => {
    if (cardAreaRef.current) {
      cardAreaRef.current.scrollLeft -= cardAreaRef.current.offsetWidth / 1.8;
      setIsAtRightEdge(false);
    }
    const isAtLeftEdge = cardAreaRef.current.scrollLeft <= 0;
    setIsAtLeftEdge(isAtLeftEdge);
  };

  const scrollRight = () => {
    if (cardAreaRef.current) {
      cardAreaRef.current.scrollLeft += cardAreaRef.current.offsetWidth / 1.8;
      setIsAtLeftEdge(false);
    }
    const isAtRightEdge =
      cardAreaRef.current.scrollLeft + cardAreaRef.current.offsetWidth >=
      cardAreaRef.current.scrollWidth;
    setIsAtRightEdge(isAtRightEdge);
  };

  const employees = [
    {
      image: "https://api.hidoctor.health/assets/users/I1MhQGUueW5ZSzgvTGxPTFdvTkVXZHZ0RmQzZz09/IMG/1672396929619121.jpg",
      status: "Çevrim içi",
      starNumber: 5,
      name: "Berkant Güney",
      job: "Psikolog | Aile Danışmanı",
      category: "psikolog",
      videoNumber: 236,
      callNumber: 24,
      language: "TR",
      skills: ["Kaygı (Anksiyete)", "Depresyon", "Travma Sonrası Stres Bozukluğu", "Obsesif Kompulsif Bozukluk", "Uyum Bozuklukları"],
      price: 420,
      showedSkillsNumber: 5,
    },
    {
      image: "https://api.hidoctor.health/assets/users/I1MhQGUuaFEwQ0R6SFd0OTh0L0JOWlRMcnpvUT09/etc/1697528520527728.png",
      status: "Çevrim içi",
      starNumber: 5,
      name: "Doğu Yıldırım",
      job: "Psikolog | Aile Danışmanı",
      category: "psikolog",
      videoNumber: 236,
      callNumber: 24,
      language: "TR",
      skills: ["Kaygı (Anksiyete)", "Depresyon", "Travma Sonrası Stres Bozukluğu", "Obsesif Kompulsif Bozukluk", "Uyum Bozuklukları"],
      price: 420,
      showedSkillsNumber: 5,
    },
    {
      image: "https://api.hidoctor.health/assets/users/I1MhQGUuaFEwQ0R6SFd0OTh0L0JOWlRMcnpvUT09/etc/1694610836523525.png",
      status: "Çevrim içi",
      starNumber: 5,
      name: "Mert Berber",
      job: "Psikolog | Aile Danışmanı",
      category: "diyetisyen",
      videoNumber: 236,
      callNumber: 24,
      language: "TR",
      skills: ["Kaygı (Anksiyete)", "Depresyon", "Travma Sonrası Stres Bozukluğu", "Obsesif Kompulsif Bozukluk", "Uyum Bozuklukları"],
      price: 420,
      showedSkillsNumber: 5,
    },
    {
      image: "https://api.hidoctor.health/assets/users/I1MhQGUuVmc5Tm1UaGRnUDlZTFU0RWljam9JUT09/IMG/1689749032870658.png",
      status: "Çevrim içi",
      starNumber: 4,
      name: "Görkem Erva Demir",
      job: "Psikolog | Aile Danışmanı",
      category: "sporEgitmeni",
      videoNumber: 75,
      callNumber: 6,
      language: "TR",
      skills: ["Depresyon","Kaygı (Anksiyete)","Fobiler","Obsesif Kompulsif Bozukluk","İlişki Sorunları"],
      price: 320,
      showedSkillsNumber: 3,
    },
    {
      image: "https://api.hidoctor.health/assets/users/I1MhQGUuS1ltWFhRR0wyM05nbWlUTGl5Z0N3QT09/etc/1699606910571076.png",
      status: "Çevrim içi",
      starNumber: 5,
      name: "Fatma Türkan Pehlivan",
      job: "Psikolog | Aile Danışmanı",
      category: "psikolog",
      videoNumber: 2,
      callNumber: 1,
      language: "TR",
      skills: ["Bireysel Terapi","Aile ve Çift Terapisi","Varoluşsal Problemler","Depresyon","Özgüven Problemleri"],
      price: 480,
      showedSkillsNumber: 4,
    },
    {
      image: "https://api.hidoctor.health/assets/users/I1MhQGUuSzM1VVoxUUVhZk5IbmlYa1ZFL1pZUT09/etc/1701238374838241.png",
      status: "Çevrim içi",
      starNumber: 5,
      name: "Berkan Çelik",
      job: "Psikolog | Aile Danışmanı",
      category: "psikolog",
      videoNumber: 1,
      callNumber: 0,
      language: "TR",
      skills: ["İlişki Sorunları","Yas Süreci","Travma Sonrası Stres Bozukluğu","Depresyon","Fobiler"],
      price: 410,
      showedSkillsNumber: 4,
    },
    {
      image: "https://api.hidoctor.health/assets/users/I1MhQGUuaFEwQ0R6SFd0OTh0L0JOWlRMcnpvUT09/etc/1695040157790430.png",
      status: "Çevrim içi",
      starNumber: 5,
      name: "Sosin Yakacı",
      job: "Diyetisyen",
      category: "diyetisyen",
      videoNumber: 7,
      callNumber: 2,
      language: "TR | EN",
      skills: ["Kilo Verme","Obezite","Hamilelik ve Doğum Sonrası Beslenme","İnsülin Direncinde Beslenme","Kolesterol ve Beslenme"],
      price: 350,
      showedSkillsNumber: 3,
    },
    {
      image: "https://api.hidoctor.health/assets/users/I1MhQGUuS1ltWFhRR0wyM05nbWlUTGl5Z0N3QT09/etc/1699952063617327.png",
      status: "Meşgul",
      starNumber: 5,
      name: "Tunahan Berber",
      job: "Diyetisyen",
      category: "diyetisyen",
      videoNumber: 0,
      callNumber: 1,
      language: "TR",
      skills: ["Kilo Verme","Kilo Alma","Kilo Kontrolü","Sporcu Beslenmesi","Obezite"],
      price: 395,
      showedSkillsNumber: 3,
    },
    {
      image: "https://api.hidoctor.health/assets/users/I1MhQGUuaFEwQ0R6SFd0OTh0L0JOWlRMcnpvUT09/etc/1695974512263910.png",
      status: "Meşgul",
      starNumber: 4,
      name: "Güldane Coşkun",
      job: "Diyetisyen",
      category: "diyetisyen",
      videoNumber: 1,
      callNumber: 1,
      language: "TR",
      skills: ["Obezite","Kilo Kontrolü","Diyabet (Şeker) Hastalığında  Beslenme","Hamilelik ve Doğum Sonrası Beslenme","Çocukluk ve Ergenlikte Beslenme"],
      price: 270,
      showedSkillsNumber: 5,
    },
    {
      image: "https://api.hidoctor.health/assets/users/I1MhQGUuaFEwQ0R6SFd0OTh0L0JOWlRMcnpvUT09/etc/1693209559158695.png",
      status: "Çevrim içi",
      starNumber: 4,
      name: "İrfan Yüncü",
      job: "Fitness Eğitmeni",
      category: "sporEgitmeni",
      videoNumber: 0,
      callNumber: 0,
      language: "TR",
      skills: ["Fonksiyonel Antrenman","Atletik Performans","Medikal Fitness","Düzeltici Egzersizler"],
      price: 245,
      showedSkillsNumber: 4,
    },
  ];

  function isMobile() {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    console.log(mediaQuery.matches)
    return mediaQuery.matches;
  }

  const filteredEmployees = clickedButtonId
  ? employees.filter((employee) => employee.category === clickedButtonId)
  : employees;

  
  return (
    <div className="App bg-bgColour">
      <PageHeader />
      <MenuArea onButtonClick={handleButtonClick}/>
      <div  className='cardArea flex overflow-x-auto transition-all duration-1500 ease-in-out ml-auto mr-auto touch-pan-x max-w-screen-lg' ref={cardAreaRef} style={{ scrollBehavior: 'smooth', touchAction: 'pan-x', overflow: isMobile() ? '' : 'hidden' }}> 
        <div className={`previousButton flex justify-center items-center absolute left-8 top-1/2 `} onClick={scrollLeft} style={{display: isMobile() ? "none" : ""}}>
          <button className='p-3'><i className={`fa-solid fa-circle-left text-4xl ${ isAtLeftEdge ? "text-buttonEnd" : "text-buttonColor"}`}></i></button>
        </div>
        {filteredEmployees.map((employee, index) => {
          return (
            <Card
              key={index}
              image={employee.image}
              status={employee.status}
              starNumber={employee.starNumber}
              name={employee.name}
              job={employee.job}
              category={employee.category}
              videoNumber={employee.videoNumber}
              callNumber={employee.callNumber}
              language={employee.language}
              skills={employee.skills}
              price={employee.price}
              showedSkillsNumber={employee.showedSkillsNumber}
            />
          );
        })}
        <div className={`nextButton flex justify-center items-center absolute right-8 top-1/2`} onClick={scrollRight} style={{display: isMobile() ? "none" : ""}}>
          <button className='p-3'><i className={`fa-solid fa-circle-right text-4xl ${ isAtRightEdge ? "text-buttonEnd" : "text-buttonColor"}`}></i></button>
        </div>
      </div>
    </div>
  );
}


export default App;
