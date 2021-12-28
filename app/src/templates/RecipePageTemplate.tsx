import React, { useContext, useEffect, useState } from 'react';
import { RecipesContext } from '../contexts/RecipesContext';

// components
import MainSection from '../components/MainSection';
import RecipeImage from '../components/Recipe/RecipeImage';
import RecipeVideo from '../components/Recipe/RecipeVideo';
import RecipeRelated from '../components/Recipe/RecipeRelated';
import RecipeBreadcrumb from '../components/Recipe/RecipeBreadcrumb';
import RecipeDescription from '../components/Recipe/RecipeDescription';
import RecipeIngredients from '../components/Recipe/RecipeIngredients';

// modules
import Aside from '../modules/Aside/Aside';

// interfaces
import IRecipe from '../ts/interfaces/IRecipe';

// helpers
import pathParser from '../helpers/pathParser';
import RecipeShareButtons from '../components/Recipe/RecipeShareButtons';

const RecipePageTemplate = () => {
  const { recipes } = useContext(RecipesContext);
  const [recipe, setRecipe] = useState<IRecipe>(null!);
  const [recipeId, setRecipeId] = useState('');

  useEffect(() => {
    const path: string = window.location.pathname;
    const id: string = pathParser(path).pop()!;
    setRecipeId(id);

    return () => {
      setRecipeId('');
    };
  }, []);

  useEffect(() => {
    const currentRecipe = recipes.find((recipe) => recipe.id === recipeId);
    if (currentRecipe !== undefined) {
      setRecipe(currentRecipe);
    }

    return () => {
      setRecipe(null!);
    };
  });

  const forceUpdate = () => {
    const path: string = window.location.pathname;
    const id: string = pathParser(path).pop()!;

    setRecipeId(id);
  };

  return (
    <React.Fragment>
      {recipe !== null ? <RecipeBreadcrumb recipe={recipe} /> : null}

      <div className="container">
        <div className="row">
          <div className="col s12 l8">
            {recipe !== null ? (
              <MainSection title={recipe.name}>
                <RecipeImage recipe={recipe} />
                <RecipeIngredients recipe={recipe} />
                <RecipeDescription recipe={recipe} />
                <RecipeVideo recipe={recipe} />
                <RecipeShareButtons recipe={recipe} />
                <span onClick={forceUpdate}>
                  <RecipeRelated recipe={recipe} />
                </span>
              </MainSection>
            ) : (
              <MainSection title={`Recipe: ${recipeId}`}>
                <p>There is no recipe like this.</p>
              </MainSection>
            )}
          </div>
          <div className="col s12 l4" onClick={forceUpdate}>
            <Aside />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RecipePageTemplate;
