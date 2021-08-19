const mealContent = document.getElementById("meals-content");


const fetchMealsData = async function () {
    try {
        const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Italian');
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}


const renderMeal = async function () {
    const res = await fetchMealsData();
    const mealsArr=await res["meals"];
    for(let i=0;i<mealsArr.length;i++){
        mealContent.innerHTML+=`<div class="shadow p-3 mb-5 bg-body rounded col-md-3 m-2  meal-box">
        <h3>${mealsArr[i]["strMeal"]}</h3>
        <img src=${mealsArr[i]["strMealThumb"]} class="img-fluid"} />
        <h6>${mealsArr[i]["idMeal"]}</h6>

        </div>`;
    }
}

renderMeal();