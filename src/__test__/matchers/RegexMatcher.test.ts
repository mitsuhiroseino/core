import { MatcherFactory } from 'src/matchers';
import RegexMatcher, { RegexMatcherConfig } from 'src/matchers/RegexMatcher';

describe('Factory', () => {
  describe('create', () => {
    test('type', () => {
      const result: RegexMatcher = MatcherFactory.create(RegexMatcher.TYPE);
      expect(result).toBeInstanceOf(RegexMatcher);
    });
    test('alts 0', () => {
      const result: RegexMatcher = MatcherFactory.create(RegexMatcher.ALTS[0]);
      expect(result).toBeInstanceOf(RegexMatcher);
    });
    test('alts 1', () => {
      const result: RegexMatcher = MatcherFactory.create(RegexMatcher.ALTS[1]);
      expect(result).toBeInstanceOf(RegexMatcher);
    });
  });
});

describe('RegexMatcher', () => {
  describe('match', () => {
    describe('default', () => {
      describe('value2 instanceof Regexp', () => {
        test('value1 === value2', () => {
          const matcher = new RegexMatcher();
          expect(matcher.match('123', /^1.*3$/)).toBe(true);
        });

        test('value1 !== value2', () => {
          const matcher = new RegexMatcher();
          expect(matcher.match('123', /^a.*3$/)).toBe(false);
        });
      });

      describe('value2 instanceof String', () => {
        const config: RegexMatcherConfig = { flags: 'g' };
        test('value1 === value2', () => {
          const matcher = new RegexMatcher(config);
          expect(matcher.match('123', '^1.*3$')).toBe(true);
        });

        test('value1 !== value2', () => {
          const matcher = new RegexMatcher(config);
          expect(matcher.match('123', '^a.*3$')).toBe(false);
        });
      });
    });
  });
});
