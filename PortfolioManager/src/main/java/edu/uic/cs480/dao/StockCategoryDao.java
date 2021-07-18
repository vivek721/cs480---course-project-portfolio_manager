package edu.uic.cs480.dao;

import java.util.List;

import edu.uic.cs480.model.StockCategory;

public interface StockCategoryDao {

	int addNewCategory(StockCategory stockCategory);

	List<StockCategory> getAllStockCategories();	

	int updateExistingCategory(int categoryId, String marketCap);
	
	void deleteCategory(int categoryId);
}