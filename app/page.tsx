export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <div className="max-w-3xl mx-auto px-4 py-10 space-y-10">
        
        {/* 1. HERO SECTION */}
        <div className="bg-white border border-gray-200 rounded-xl p-8 text-center shadow-sm">
          
          
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">
            МОНГОЛ ГЭР: Тоглоом 
          </h1>
          
                  </div>

        {/* 2. WHO YOU ARE */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Бид хэн бэ? (Who you are)
          </h2>
          <p className="text-gray-600 text-sm mb-4">
            Бид монгол өв соёлыг орчин үеийн технологитой холбох зорилготой 4-р баг юм.
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              "Отгонжаргал",
              "Марлаа",
              "Цэцэгсүрэн",
              "Должинсүрэн",
              "Төгс төгөлдөр",
              "Төгс Эрдэм",
            ].map((name, idx) => (
              <div key={idx} className="bg-gray-50 border border-gray-100 p-3 rounded-lg">
                <p className="text-xs text-gray-400 font-medium">Багийн гишүүн {idx + 1}</p>
                <p className="font-semibold text-gray-700 text-sm">{name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. WHAT YOU DO */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Бид юу хийдэг вэ? (What you do)
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Суурьшмал амьдралаас үүдэн залуус болон жуулчид монгол гэрийг хэрхэн барьдгийг мэдэхгүй болж байна. 
            Бид энэ асуудлыг тоглоомжуулсан вэб сайтаар дамжуулж, интерактив бөгөөд хөгжилтэй байдлаар шийдвэрлэхийг зорилоо.
          </p>
        </div>

        {/* 4. GAME PLAY AREA & STEPS */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Монгол гэр барих тоглоом
          </h2>
          <p className="text-gray-600 text-sm mb-6">
            Тоглоом эхлэхдээ гэр нурсан шалтгаан бүхий story явна. Дуусмагц эд ангиудыг зөв дарааллаар нь чирж авчран гэрээ босгоорой! Буруу дарааллаар барих гэсэн үед анхааруулга гарна.
          </p>

          {/* Canvas Placeholder */}
          

          <h3 className="font-semibold text-gray-800 text-sm mb-3">Гэр барих 14 алхамт дараалал:</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
            {[
              "Шалаа тавих", "Хаалга босгох", "Ханаа дугуйлах", "Бүслүүр татах",
              "Тооно ба хаалга босгох", "Унь татах", "Дотуур бүрээс тавих", "Туурга нөмөргөх",
              "Цаваг тавих", "Дээвэр тавих", "Гадуур бүрээс нөмөргөх", "Өрхөө тавих",
              "Хаяавч татах", "Оосруудаар бэхлэх"
            ].map((step, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-gray-50 border border-gray-200/60 px-3 py-2 rounded-md">
                <span className="w-5 h-5 flex items-center justify-center bg-gray-200 text-gray-700 text-xs font-bold rounded">
                  {idx + 1}
                </span>
                <span className="text-gray-700">{step}</span>
              </div>
            ))}
          </div>
          
          <p className="mt-4 text-center text-xs text-blue-600 font-medium bg-blue-50 py-2 rounded-md">
            Гэрээ амжилттай баримагц тоглоом дуусна.
          </p>
        </div>

        {/* 5. FEATURES */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Хийгдсэн боломжууд (Features)
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border border-gray-200 p-4 rounded-lg bg-gray-50/50">
              <p className="font-semibold text-gray-800 text-sm mb-1">1. 2D Drag and Drop</p>
              <p className="text-xs text-gray-500">Хулганаар эд зүйлсийг барьж чирэн гэрийн зөв байрлалд угсрах логик.</p>
            </div>
            
            <div className="border border-gray-200 p-4 rounded-lg bg-gray-50/50">
              <p className="font-semibold text-gray-800 text-sm mb-1">2. Дараалал шалгагч</p>
              <p className="text-xs text-gray-500">Буруу дарааллаар угсарвал санамж өгч, зөв дарааллыг зааж өгнө.</p>
            </div>

            <div className="border border-gray-200 p-4 rounded-lg bg-gray-50/50">
              <p className="font-semibold text-gray-800 text-sm mb-1">3. Интерактив эффект</p>
              <p className="text-xs text-gray-500">Хэсэг бүрийг зөв байрлуулахад дуу болон визуал эффект үзүүлнэ.</p>
            </div>

            <div className="border border-gray-200 p-4 rounded-lg bg-gray-50/50">
              <p className="font-semibold text-gray-800 text-sm mb-1">4. Олон хэлний сонголт</p>
              <p className="text-xs text-gray-500">Гадаадын жуулчдад зориулсан монгол болон англи хэлний сонголттой.</p>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <footer className="text-center pt-4 text-xs text-gray-400">
          <p>© 2026 Mongolian Ger Project. All rights reserved.</p>
        </footer>

      </div>
    </div>
  );
}