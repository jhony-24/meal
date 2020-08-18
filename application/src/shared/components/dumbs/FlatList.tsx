import React, { memo, ReactNode } from "react";
import { UIContainer } from "shared/styled/UIContainer.styled";

function FlatList<T,D>({ data, render, renderHeader, renderFooter } : FlatListProps<T,D>) {
  const _header = renderHeader && <UIContainer>{renderHeader}</UIContainer>;
  const _footer = renderFooter && <UIContainer>{renderFooter}</UIContainer>;
  const _render = !!data.length && <UIContainer>{data.map((e : D, i : number) => render(e, i))}</UIContainer>;

  return (
    <UIContainer>
      {_header}
      {_render}
      {_footer}
    </UIContainer>
  );
}

type FlatListProps<T,D> = {
	data : D[];
	render ?: (currentData : D , index : number) => ReactNode;
	renderHeader ?: string | ReactNode;
	renderFooter ?: string | ReactNode;
};

FlatList.defaultProps = {
	data: [],
  renderHeader: null,
  renderFooter: null,
};

export default memo(FlatList);
