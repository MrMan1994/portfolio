import React from 'react'
import Layout from '../components/layout'

import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

class IndexPage extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         isArticleVisible: false,
         isAlbumVisible: false,
         timeout: false,
         articleTimeout: false,
         article: '',
         album: '',
         loading: 'is-loading'
      }
      this.handleOpenArticle = this.handleOpenArticle.bind(this)
      this.handleOpenAlbum = this.handleOpenAlbum.bind(this)
      this.handleCloseArticle = this.handleCloseArticle.bind(this)
      this.handleCloseAlbum = this.handleCloseAlbum.bind(this)
      this.setWrapperRef = this.setWrapperRef.bind(this)
      this.handleClickOutside = this.handleClickOutside.bind(this)
      this.handleOpenContextMenu = this.handleOpenContextMenu.bind(this)
   }

   componentDidMount () {
      this.timeoutId = setTimeout(() => {
         this.setState({loading: ''});
      }, 100);
      document.addEventListener('mousedown', this.handleClickOutside);
   }

   componentWillUnmount () {
      if (this.timeoutId) {
         clearTimeout(this.timeoutId);
      }
      document.removeEventListener('mousedown', this.handleClickOutside);
   }

   setWrapperRef(node) {
      this.wrapperRef = node;
   }

   handleOpenArticle(article) {
      this.setState({
         isArticleVisible: !this.state.isArticleVisible,
         article
      })
      setTimeout(() => {
         this.setState({
            timeout: !this.state.timeout
         })
      }, 325)

      setTimeout(() => {
         this.setState({
            articleTimeout: !this.state.articleTimeout
         })
      }, 350)

   }

   handleOpenAlbum(album) {
      this.setState({
         isAlbumVisible: !this.state.isAlbumVisible,
         album
      })
   }

   handleCloseArticle() {

      this.setState({
         articleTimeout: !this.state.articleTimeout
      })

      setTimeout(() => {
         this.setState({
            timeout: !this.state.timeout
         })
      }, 325)

      setTimeout(() => {
         this.setState({
            isArticleVisible: !this.state.isArticleVisible,
            article: ''
         })
         if (this.state.isAlbumVisible) {
            this.setState({
               isAlbumVisible: !this.state.isAlbumVisible,
               album: ''
            })
         }
      }, 350)

   }

   handleCloseAlbum() {
      this.setState({
         isAlbumVisible: !this.state.isAlbumVisible,
         album: ''
      })
   }

   handleClickOutside(event) {
      if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
         if (this.state.isArticleVisible) {
            this.handleCloseArticle()
            if (this.state.isAlbumVisible) {
               this.handleCloseAlbum()
            }
         }
      }
   }

   handleOpenContextMenu(e) {
      //e.preventDefault();
   }

   render() {
      return (
         <Layout location={this.props.location}>
            <div className={`body ${this.state.loading} ${this.state.isArticleVisible ? 'is-article-visible' : ''}`} onContextMenu={this.handleOpenContextMenu}>
               <div id="wrapper">
                  <Header onOpenArticle={this.handleOpenArticle} timeout={this.state.timeout} />
                  <Main
                     isArticleVisible={this.state.isArticleVisible}
                     isAlbumVisible={this.state.isAlbumVisible}
                     timeout={this.state.timeout}
                     articleTimeout={this.state.articleTimeout}
                     article={this.state.article}
                     album={this.state.album}
                     onCloseArticle={this.handleCloseArticle}
                     onOpenAlbum={this.handleOpenAlbum}
                     onCloseAlbum={this.handleCloseAlbum}
                     setWrapperRef={this.setWrapperRef}
                  />
                  <Footer timeout={this.state.timeout} />
               </div>
               <div id="bg"></div>
            </div>
         </Layout>
      )
   }
}

export default IndexPage
