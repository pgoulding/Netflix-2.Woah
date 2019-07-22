import * as ApiFetch from './ApiFetch';
import React from 'react';
import {
  shallow
} from 'enzyme';
import apikey from '../../apikey';
import * as mockData from '../mockData/mockData';

describe('ApiFetch', () => {
  describe('findGenres', () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockData.mockGenre)
        })
      );
    });
    it('should call the fetch with the correct arguements', async () => {
      const mockUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apikey}&language=en-US`
      await ApiFetch.findGenres(mockUrl);
      expect(window.fetch).toHaveBeenCalledWith(mockUrl);
    });
    it('should return a parsed version of the result', async () => {
      const expected = await ApiFetch.findGenres();
      expect(expected).toEqual(mockData.mockGenre);
    });
    it('should throw an error if fetch fails', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: false
      }))
      await expect(ApiFetch.findGenres()).rejects.toEqual(Error(mockData.mockError));
    });
  });
  describe('fetchSingleGenre', () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockData.mockGenre)
        })
      );
    });
    it('should call the fetch with the correct arguements', () => {
      const mockUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${mockData.mockGenre}`
      await ApiFetch.fetchSingleGenre(mockUrl);
      expect(window.fetch).toHaveBeenCalledWith(mockUrl);
    });
    it('should invoke cleanMovies with genreId and results', () => {

    });
    it('should return a parsed version of the result', () => {

    });
    it('should throw an error if fetch fails', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: false
      }))
      await expect(ApiFetch.fetchSingleGenre()).rejects.toEqual(Error(mockData.mockError));

    });
  });
  describe('searchForMovie', () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockData.mockMovie)
        })
      );
    });
    it('should call the fetch with the correct arguements', () => {
      const mockSearchTerm = 'Toy Story'
      const mockUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${mockSearchTerm}&page=1&include_adult=false`
      await ApiFetch.searchForMovie(mockUrl);
      expect(window.fetch).toHaveBeenCalledWith(mockUrl);
    });
    it('should invoke cleanMovies with results and searchTerm', () => {

    });
    it('should return a parsed version of the result', () => {

    });
    it('should throw an error if fetch fails', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: false
      }))
      await expect(ApiFetch.searchForMovie()).rejects.toEqual(Error(mockData.mockError));

    });
  });
  describe('fetchSingleMovie', () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockData.mockMovie)
        })
      );
    });
    it('should call the fetch with the correct arguements', () => {
      const mockUrl = `https://api.themoviedb.org/3/movie/${mockData.mockMovie.id}?api_key=${apiKey}&language=en-US`
      await ApiFetch.fetchSingleMovie(mockUrl);
      expect(window.fetch).toHaveBeenCalledWith(mockUrl);
    });
    it('should return a parsed version of the result', () => {

    });
    it('should throw an error if fetch fails', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: false
      }))
      await expect(ApiFetch.fetchSingleMovie()).rejects.toEqual(Error(mockData.mockError));

    });
  });
  describe('sendUserLogin', () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockData.mockUser)
        })
      );
    });
    it('should call the fetch with the correct arguements', () => {
      const mockUrl = `https://api.themoviedb.org/3/movie/${mockData.mockMovie.id}?api_key=${apiKey}&language=en-US`
      await ApiFetch.fetchSingleMovie(mockUrl, mockData.mockPost);
      expect(window.fetch).toHaveBeenCalledWith(mockUrl, mockData.mockPost);
    });
    it('should return a parsed version of the result', async () => {
      const expected = await ApiFetch.sendUserLogin();
      expect(expected).toEqual(mockData.mockUser, mockData.mockPost);
      //double check what it should equal
    });
    it('should throw an error if fetch fails', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: false
      }))
      await expect(ApiFetch.sendUserLogin()).rejects.toEqual(Error(mockData.mockError));
    });
  });
  describe('sendNewAccount', () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockData.mockUser)
        })
      );
    });
    it('should call the fetch with the correct arguements', () => {});
    it('should return a parsed version of the result', () => {

    });
    it('should throw an error if fetch fails', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: false
      }))
      await expect(ApiFetch.sendNewAccount()).rejects.toEqual(Error(mockData.mockError));

    });
  });
  describe('sendFavorite', () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockData.mockMovie)
        })
      );
    });
    //need to make sure mock movies has isFavorited
    it('should call the fetch with the correct arguements', () => {

    });
    it('should return a parsed version of the result', async () => {
      const expected = await ApiFetch.sendFavorite();
      expect(expected).toEqual(mockData.mockUser);
      //check what it should equal
    });
    it('should throw an error if fetch fails', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: false
      }))
      await expect(ApiFetch.sendFavorite()).rejects.toEqual(Error(mockData.mockError));
    });
  });
})