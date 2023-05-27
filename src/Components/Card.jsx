const Card = () => {
  return (
    <div className="max-w-md m-auto bg-secondary3">
      <div className="bg-white shadow-lg">
        <div className="relative">
          <img
            className="w-full h-66"
            src="../src/Images/planning.jpg"
            alt="green iguana"
          />
        </div>
        <div className="py-6">
          <h5 className="text-lg font-bold mb-2 text-center">Tomate tu tiempo</h5>
          <p className="text-sm text-gray-600 text-center">
            ¡Planea tu siguiente viaje!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
