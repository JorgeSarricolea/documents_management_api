class CategoryPresenter {
  static format(category) {
    return {
      id: category.category_id,
      name: category.name,
      isForStudent: category.is_for_student,
      isForTutor: category.is_for_tutor,
      isRequired: category.is_required,
    };
  }

  static formatList(categories) {
    return categories.map(this.format);
  }
}

export default CategoryPresenter;
