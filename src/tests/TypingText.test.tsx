import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TypingText } from '@/components/index';

describe('TypingText', () => {
  test("Should show as much span as props's length", () => {
    const props = 'Welcome to my portfolio';
    render(<TypingText title={props} />);

    const title = screen.getByRole('heading');
    const spans = title.children;

    expect(title).toHaveClass('title');
    expect(spans.length).toBe(props.length);
  });
});
